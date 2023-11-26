import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UsoService } from '../../services/uso.service';
import { UsoResponse } from '../../models/uso.interface';
import { Bike } from '../../models/bike-list.interface';
import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-page-details-trip',
  templateUrl: './page-details-trip.component.html',
  styleUrl: './page-details-trip.component.css'
})
export class PageDetailsTripComponent implements OnInit {


  useId!: number;
  use!: UsoResponse;
  bike!: Bike;
  bikeName!: string;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private sanitazer: DomSanitizer, private useService: UsoService, private bikeService: BikeService) {
    this.useId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.useService.getUsoById(this.useId).subscribe(resp => {
      this.use = resp;
      this.bikeName = resp.bicicleta;
      this.bikeService.getBikeByName(this.bikeName).subscribe(resp => {
        this.bike = resp;
      })
    })
  }



}
