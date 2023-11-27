import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { UsoService } from '../../services/uso.service';
import { UsoResponse } from '../../models/uso.interface';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environments';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-use-bar',
  templateUrl: './details-use-bar.component.html',
  styleUrl: './details-use-bar.component.css'
})
export class DetailsUseBarComponent implements OnChanges, OnDestroy, OnInit {

  @Input() uso!: UsoResponse;
  fechaInicio: any;
  cost: number = 0;
  bike: any;
  tiempoTranscurrido: string = '00:00:00';  // Inicializar con el valor deseado
  intervalId: any;

  constructor(private modalService: NgbModal, private usoService: UsoService, private router: Router) { }

  ngOnInit(): void {
    this.usoService.getCurrentCost().subscribe(resp => {
      this.cost = resp.precioMinuto;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['uso'] && changes['uso'].currentValue) {
      const fechaEnCadena = this.uso.fechaInicio;
      //this.cost = this.uso.coste;
      this.fechaInicio = new Date(fechaEnCadena);
      this.bike = this.uso.bicicleta;
      this.iniciarContador();
    }
  }

  ngOnDestroy(): void {
    this.detenerContador();
  }

  iniciarContador(): void {
    this.intervalId = setInterval(() => {
      if (this.fechaInicio) {
        const ahora = new Date();
        const diferencia = ahora.getTime() - this.fechaInicio.getTime();
        this.tiempoTranscurrido = this.formatoTiempo(diferencia);
      }
    }, 1000);
  }

  detenerContador(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  formatoTiempo(milliseconds: number): string {
    const segundos = Math.floor(milliseconds / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);

    const formatoHoras = ('0' + horas).slice(-2);
    const formatoMinutos = ('0' + (minutos % 60)).slice(-2);
    const formatoSegundos = ('0' + (segundos % 60)).slice(-2);

    return `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
  }

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  finishTrip() {
    this.usoService.finishUse("140ecf7b-5ba8-46f6-945b-2f91d3f0c08d").subscribe(resp => {
      this.uso = resp;
    })

    this.router.navigate(['use/trip/resume']);
  }
}
