import { Component } from '@angular/core';
import { StationsService } from '../../services/stations.service';

@Component({
  selector: 'app-add-station-forms',
  templateUrl: './add-station-forms.component.html',
  styleUrls: ['./add-station-forms.component.css']
})
export class AddStationFormsComponent {
  stationData = {
    nombre: '',
    numero: '',
    coordenadas: '',
    capacidad: 0
  };

  capacityNumbers = Array.from({length: 31}, (_, i) => i);
  constructor(private stationsService: StationsService) { }

  submitForm() {
    this.stationData.capacidad = +this.stationData.capacidad;

    this.stationsService.createStation(this.stationData).subscribe(
      (response) => {
        console.log('La estación se ha creado con éxito:', response);
      },
      (error) => {
        console.error('Hubo un error al crear la estación:', error);
      }
    );
  }
}
