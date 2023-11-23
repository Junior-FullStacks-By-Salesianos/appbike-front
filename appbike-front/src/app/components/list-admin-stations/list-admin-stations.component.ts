import { Component } from '@angular/core';
import { StationsService } from '../../services/stations.service';
import { ActivatedRoute } from '@angular/router';
import { AllStationsResponse, Station } from '../../models/list-all-stations';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddStationFormsComponent } from '../add-station-forms/add-station-forms.component';


@Component({
  selector: 'app-list-admin-stations',
  templateUrl: './list-admin-stations.component.html',
  styleUrl: './list-admin-stations.component.css'
})
export class ListAdminStationsComponent {

  private modalRef: NgbModalRef | undefined;
  stations!: Station[]

  constructor(private stationService:StationsService,private modalService: NgbModal){
    this.loadNewPage();
  }

  ngOnInit(): void {
    this.loadNewPage()
  }
  openModal() {
    this.modalRef = this.modalService.open(AddStationFormsComponent);
    
    this.modalRef.hidden.subscribe((reason: any) => {
      if (reason === 'submit') {
        this.loadNewPage();
      }
    });
  }
  loadNewPage(){
    this.stationService.getAllStations().subscribe(resp => {
      this.stations=resp
    })
  }
}
