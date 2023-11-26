import { Component, OnInit } from '@angular/core';
import { UsoService } from '../../services/uso.service';
import { UsoResponse } from '../../models/uso.interface';

@Component({
  selector: 'app-page-finish-ride',
  templateUrl: './page-finish-ride.component.html',
  styleUrl: './page-finish-ride.component.css'
})
export class PageFinishRideComponent implements OnInit {

  uso!: UsoResponse;

  constructor(private usoService: UsoService) { }


  ngOnInit(): void {
    this.usoService.getActiveUse().subscribe(resp => {
      this.uso = resp;
    })
  }



}
