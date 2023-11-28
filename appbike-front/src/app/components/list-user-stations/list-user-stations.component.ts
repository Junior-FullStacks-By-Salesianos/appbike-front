import { Component } from '@angular/core';
import { StationsService } from '../../services/stations.service';
import { Station } from '../../models/list-all-stations';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-list-user-stations',
  templateUrl: './list-user-stations.component.html',
  styleUrl: './list-user-stations.component.css'
})
export class ListUserStationsComponent {
  stations: Station[] = [];
  map: google.maps.Map | undefined;
  markers: google.maps.Marker[] = [];

  constructor(private stationService: StationsService) {}

  ngOnInit(): void {
    this.stationService.getAllStations().subscribe(resp => {
      this.stations = resp;
      this.initMap();
    });
  }

  showOnMap(): void {
    if (!this.map) return;

    this.markers.forEach(marker => {
      marker.setMap(null); 
    });
    this.markers = [];

    this.stations.forEach(station => {
          
const stationCapacity = station.capacity - station.bikes; 
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">${stationCapacity}</text>
</svg>`;

const encodedIcon = `data:image/svg+xml;base64,${btoa(svgIcon)}`;

      const coordinates = station.coordinates.split(',');
      const latitude = parseFloat(coordinates[0]);
      const longitude = parseFloat(coordinates[1]);

      const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: this.map,
        title: station.name,
        icon: { 
          url: encodedIcon,
          scaledSize: new google.maps.Size(40, 40),}
      });
      

      this.markers.push(marker);

      marker.addListener('click', () => {
        console.log('Id:', station.number);
      });
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
