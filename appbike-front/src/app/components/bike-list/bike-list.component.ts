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
  selectVisible: boolean = false;


  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.bikeService.getBikeListForAdmin().subscribe(resp => {
      this.listBikes = resp;
    });
  }

  toggleSelect() {
    this.selectVisible = !this.selectVisible;
  }
}
