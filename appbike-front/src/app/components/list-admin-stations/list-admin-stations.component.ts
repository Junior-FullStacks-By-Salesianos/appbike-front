import { Component, ViewChild } from '@angular/core';
import { StationsService } from '../../services/stations.service';
import { Station } from '../../models/list-all-stations';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list-admin-stations',
  templateUrl: './list-admin-stations.component.html',
  styleUrls: ['./list-admin-stations.component.css']
})
export class ListAdminStationsComponent {
  stationData = {
    nombre: '',
    coordenadas: '',
    capacidad: 0
  };
  capacityNumbers = Array.from({ length: 31 }, (_, i) => i + 1);
  private modalRef: NgbModalRef | undefined;
  stations: Station[] = [];

  constructor(private stationService: StationsService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadNewPage();
  }

  openModal(content: any) {
    this.modalRef = this.modalService.open(content, { 
      ariaLabelledBy: 'modal-title' });
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  loadNewPage() {
    this.stationService.getAllStations().subscribe(resp => {
      this.stations = resp;
    });
  }

  submitForm() {
    this.stationData.capacidad = +this.stationData.capacidad;

    this.stationService.createStation(this.stationData).subscribe(
      (response) => {
        console.log('La estación se ha creado con éxito:', response);
        this.loadNewPage();
        this.closeModal();
      },
      (error) => {
        console.error('Hubo un error al crear la estación:', error);
      }
    );
  }
}