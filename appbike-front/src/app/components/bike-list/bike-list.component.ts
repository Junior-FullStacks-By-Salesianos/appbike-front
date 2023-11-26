import { Component, OnInit } from '@angular/core';
import { Bike } from '../../models/bike-list.interface';
import { BikeService } from '../../services/bike.service';
import { Station } from '../../models/list-all-stations';
import { Observable, map, startWith } from 'rxjs';
import { StationsService } from '../../services/stations.service';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormAddBikeAdminComponent } from '../form-add-bike-admin/form-add-bike-admin.component';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrl: './bike-list.component.css',
})
export class BikeListComponent implements OnInit {

  listBikes: Bike[] = [];
  countBikes: number = 0;
  currentPage: number = 1;
  filteredOptions!: Observable<Station[]>;
  options: Station[] = [];
  myControl = new FormControl<string | Station>('');

  constructor(private bikeService: BikeService, private stationService: StationsService, public dialog: MatDialog) { }


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

  openForm() {
    this.dialog.open(FormAddBikeAdminComponent);
  }


}
