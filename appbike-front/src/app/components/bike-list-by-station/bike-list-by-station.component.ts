import { Component, OnInit } from '@angular/core';
import { Bike } from '../../models/bike-list.interface';
import { BikeService } from '../../services/bike.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsoService } from '../../services/uso.service';
import { UsoBegin } from '../../models/uso.interface';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-bike-list-by-station',
  templateUrl: './bike-list-by-station.component.html',
  styleUrl: './bike-list-by-station.component.css'
})
export class BikeListByStationComponent implements OnInit {

  bikeList: Bike[] = [];
  bikeDetails!: Bike;
  countBikes: number = 0;
  uso!: UsoBegin;
  errorRent = false;

  constructor(private bikeService: BikeService, private modalService: NgbModal, private usoService: UsoService, private router: Router) { }

  ngOnInit(): void {
    this.bikeService.getBikeListForStation("307eab5f-7f28-45db-9ea9-f92ac36280dc").subscribe(resp => {
      this.bikeList = resp
      this.countBikes = resp.length;
    })

  }

  openModal(uuid: String, modal: any) {
    this.bikeService.getBikeByUuid(uuid).subscribe(resp => {
      this.bikeDetails = resp;
    })
    this.modalService.open(modal, {
      keyboard: false,
      centered: true
    })
  }

  rent() {
    this.usoService.beginUso(this.bikeDetails.uuid).pipe(
      catchError(error => {
        this.errorRent = true;
        return [];
      })
    ).subscribe(
      _resp => {
        this.router.navigate(['/use/trip']);
      }
    );
  }


}
