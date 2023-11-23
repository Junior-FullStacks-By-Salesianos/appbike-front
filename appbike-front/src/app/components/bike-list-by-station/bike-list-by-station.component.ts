import { Component, OnInit } from '@angular/core';
import { Bike } from '../../models/bike-list.interface';
import { BikeService } from '../../services/bike.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-bike-list-by-station',
  templateUrl: './bike-list-by-station.component.html',
  styleUrl: './bike-list-by-station.component.css'
})
export class BikeListByStationComponent implements OnInit {

  bikeList: Bike[] = [];
  bikeDetails!: Bike;

  constructor(private bikeService: BikeService, private modalService: NgbModal, private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    const token = this.tokenService.getToken();
    console.log('Token:', token);
    this.bikeService.getBikeListForStation("73dbf288-8714-42d0-b9cf-a7549e5a226e").subscribe(resp => {
      this.bikeList = resp
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

}
