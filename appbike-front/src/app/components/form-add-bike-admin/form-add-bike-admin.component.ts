import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { StationsService } from '../../services/stations.service';
import { Station } from '../../models/list-all-stations';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-add-bike-admin',
  templateUrl: './form-add-bike-admin.component.html',
  styleUrl: './form-add-bike-admin.component.css'
})
export class FormAddBikeAdminComponent implements OnInit {

  constructor(private bikeService: BikeService, private stationService: StationsService) { }

  filteredOptions!: Observable<Station[]>;
  options: Station[] = [];
  myControl = new FormControl<string | Station>('');

  ngOnInit(): void {
    this.stationService.getAllStations().subscribe(resp => {
      this.options = resp;
    })
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  private _filter(name: string): Station[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(station: Station): string {
    return station.name && station ? station.name : '';
  }

}
