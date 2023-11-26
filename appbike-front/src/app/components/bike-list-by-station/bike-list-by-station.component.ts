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
    this.bikeService.getBikeListForStation("8d1a084b-33d4-4270-ac67-c28d5eb6c8ec").subscribe(resp => {
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
      resp => {
        this.router.navigate(['/use/trip']);
      }
    );
  }

  getBikeListLenght() {
    if (this.bikeList.length != null) {
      return this.bikeList.length
    }
    return 0
  }


}
