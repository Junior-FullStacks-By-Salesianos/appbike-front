import { Component, OnInit } from '@angular/core';
import { Bike } from '../../models/bike-list.interface';
import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrl: './bike-list.component.css'
})
export class BikeListComponent implements OnInit {


  listBikes: Bike[] = [];

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.bikeService.getList().subscribe(resp => {
      this.listBikes = resp.results;
    });
  }
}
