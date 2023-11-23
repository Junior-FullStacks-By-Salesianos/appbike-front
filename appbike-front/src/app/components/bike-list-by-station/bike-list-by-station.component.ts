import { Component, OnInit } from '@angular/core';
import { Bike } from '../../models/bike-list.interface';
import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-bike-list-by-station',
  templateUrl: './bike-list-by-station.component.html',
  styleUrl: './bike-list-by-station.component.css'
})
export class BikeListByStationComponent implements OnInit {

  bikeList: Bike[] = [];

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.bikeService.getBikeListForStation("652b42c4-4732-4997-ae4c-a6820a90ae19").subscribe(resp => {
      this.bikeList = resp
    })
  }

}
