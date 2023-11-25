import { Component } from '@angular/core';
import { StationsService } from '../../services/stations.service';
import { Station } from '../../models/list-all-stations';

@Component({
  selector: 'app-list-user-stations',
  templateUrl: './list-user-stations.component.html',
  styleUrl: './list-user-stations.component.css'
})
export class ListUserStationsComponent {

  stations: Station[] = [];
  constructor(private stationService: StationsService){}

  ngOnInit(): void {
    this.stationService.getAllStations().subscribe(resp => {
      this.stations = resp;
    });
  }
  showOnMap(station : any){
    
  }
}
