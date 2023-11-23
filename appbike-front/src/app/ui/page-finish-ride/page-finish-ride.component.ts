import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../models/bike-list.interface';
import { UsoService } from '../../services/uso.service';
import { UsoBegin } from '../../models/uso-begin.interface';

@Component({
  selector: 'app-page-finish-ride',
  templateUrl: './page-finish-ride.component.html',
  styleUrl: './page-finish-ride.component.css'
})
export class PageFinishRideComponent implements OnInit {

  bikeName: string = "";
  route: ActivatedRoute = inject(ActivatedRoute);
  bikeSelected!: Bike;
  uso!: UsoBegin;

  constructor(private sanitazer: DomSanitizer, private bikeService: BikeService, private usoService: UsoService) {
    this.bikeName = String(this.route.snapshot.params['id']);
  }


  ngOnInit(): void {
    this.bikeService.getBikeByName(this.bikeName).subscribe(resp => {
      this.bikeSelected = resp
      this.usoService.beginUso(this.bikeSelected.uuid).subscribe(resp => {
        this.uso = resp;
      })
    })
  }

}
