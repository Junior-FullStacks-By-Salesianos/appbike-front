import { Component, OnInit } from '@angular/core';
import { StationsService } from '../../services/stations.service';
import { Station } from '../../models/list-all-stations';
import { Loader } from '@googlemaps/js-api-loader';
import { Router } from '@angular/router';
import { UsoService } from '../../services/uso.service';
import { UsoResponse } from '../../models/uso.interface';

@Component({
  selector: 'app-page-finish-ride',
  templateUrl: './page-finish-ride.component.html',
  styleUrl: './page-finish-ride.component.css'
})
export class PageFinishRideComponent implements OnInit {

  stations: Station[] = [];
  map: google.maps.Map | undefined;
  markers: google.maps.Marker[] = [];
  uso!: UsoResponse;
  isLoading = true;

  constructor(
    private stationService: StationsService,
    private usoService: UsoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stationService.getAllStations().subscribe(resp => {
      this.stations = resp;
      this.initMap();
    });

    this.usoService.getActiveUse().subscribe({
      next: resp => {
        this.uso = resp;
        this.isLoading = false;
      },
      error: err => {
        if (err.status == 404) {
          this.router.navigate(['/page-404'])
        }
      }
    })
  }

  showOnMap(): void {
    if (!this.map) return;

    this.markers.forEach(marker => {
      marker.setMap(null);
    });
    this.markers = [];

    this.stations.forEach(station => {

      const stationNow = station.bikes.length;
      let iconUrl = '';
      let clickable = true;

      if (stationNow != station.capacity) {
        iconUrl = 'assets/img/bikes.png';
      } else {
        iconUrl = 'assets/img/fullStation.png';
        clickable = false;
      }

      const coordinates = station.coordinates.split(',');
      const latitude = parseFloat(coordinates[0]);
      const longitude = parseFloat(coordinates[1]);

      const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: this.map,
        title: station.name,
        clickable: clickable,
        icon: {
          url: iconUrl,
          scaledSize: new google.maps.Size(65, 65)
        }
      });

      this.markers.push(marker);

      if (clickable) {
        marker.addListener('click', () => {
          this.router.navigate(['/rentbystation', station.id]);
        })
      };
    });
  }

  initMap(): void {
    const loader = new Loader({
      apiKey: "AIzaSyDtpcf5htnmyWhR26aWh9dEtyp9wqf2fxc",
      version: "weekly"
    });

    loader.load().then(() => {
      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 37.3891, lng: -5.9845 },
        zoom: 14,
      });
      this.showOnMap();
    }).catch(error => {
      console.error("Error al cargar la API de Google Maps:", error);
    });
  }
}
