import { Component, OnInit, TemplateRef } from '@angular/core';
import { Bike, Estado } from '../../models/bike-list.interface';
import { BikeService } from '../../services/bike.service';
import { Station } from '../../models/list-all-stations';
import { Observable, map, startWith } from 'rxjs';
import { StationsService } from '../../services/stations.service';
import { FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewBikeResponse } from '../../models/new-bike.interface';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrl: './bike-list.component.css',
})
export class BikeListComponent implements OnInit {

  listBikes: Bike[] = [];
  countBikes: number = 0;
  currentPage: number = 1;
  stations: Station[] = [];
  myControl = new FormControl<string | Station>('');

  formBikeAdd: any = {
    nombre: null,
    marca: null,
    modelo: null,
    estado: null,
    estacion: null
  }

  messageOfError!: string;
  closeResult = '';

  constructor(private bikeService: BikeService, private stationService: StationsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.bikeService.getBikeListForAdmin(this.currentPage - 1).subscribe(resp => { //Se le resta uno a la página actual ya que el ngb-pagination empieza por uno cuando en la API empezamos por 0
      this.listBikes = resp.content;
      this.countBikes = resp.totalElements;
      this.currentPage = resp.number;
    });

  }

  loadNewPage(): void {
    this.bikeService.getBikeListForAdmin(this.currentPage - 1).subscribe(resp => {
      this.listBikes = resp.content;
      this.countBikes = resp.totalElements;
    });
  }

  openForm(content: TemplateRef<any>) {

    this.stationService.getAllStations().subscribe(resp => {
      this.stations = resp;
    });
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result: any) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason: any) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  private _filter(name: string): Station[] {
    const filterValue = name.toLowerCase();
    return this.stations.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    this.bikeService.createNewBike(this.formBikeAdd).subscribe({

      next: data => {
        this.modalService.dismissAll();
        debugger
      },
      error: err => {
        this.messageOfError = err.error.message;
        console.log(err);
      }
    });
    //window.location.reload();
  }

  displayFn(station: Station): string {
    return station.name && station ? station.name : '';
  }

  takeFormResults() {
    const newBike: NewBikeResponse = {
      nombre: this.formBikeAdd.name,
      marca: this.formBikeAdd.marca,
      modelo: this.formBikeAdd.modelo,
      estacion: this.formBikeAdd.station,
      estado: this.formBikeAdd.condition
    };
    return newBike;
  }

  getConditionEnumValues(): string[] {
    return Object.values(Estado);
  }
}