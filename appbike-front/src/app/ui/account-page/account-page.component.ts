import { Component, OnInit } from '@angular/core';
import { BikeUserService } from '../../services/bike-user.service';
import { BikeUser } from '../../models/user.interface';
import { UsoService } from '../../services/uso.service';
import { forkJoin } from 'rxjs';
import { Uso } from '../../models/uso.interface';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.css'
})
export class AccountPageComponent implements OnInit {
  userDetails!: BikeUser;
  usesByUserList!: Uso[];
  today = this.getReadableDate();
  userId!: string | null;
  listSize!: number;
  currentPage = 0;

  constructor(private bikeUserService: BikeUserService, private usoService: UsoService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('USER_ID');

    if (this.userId) {
      let userDetailsRequest =  this.bikeUserService.getUserDetails(this.userId);
      let usesByUserRequest = this.usoService.getUsosByUser(this.userId, this.currentPage);

      forkJoin([userDetailsRequest,usesByUserRequest]).subscribe(resp =>{
        this.userDetails = resp[0];
        this.usesByUserList = resp[1].content;
        this.listSize = resp[1].totalElements;
      })
    }
  }

  getReadableDate(){
    let today = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const todayDay = days[today.getDay()];
    const todayDayNumber =  today.toLocaleDateString('en-US', {day:'numeric'});;
    const todayMonth = today.toLocaleDateString('en-US', {month:'long'});
    const todayYear = today.getFullYear();

    return `${todayDay}, ${todayDayNumber} ${todayMonth} ${todayYear}`;
  }

  loadNewPage(){
    this.userId ? 
    this.usoService.getUsosByUser(this.userId,this.currentPage -1).subscribe(resp => {
      this.usesByUserList = resp.content;
    }) : 
    console.error("User Id has not been properly loaded.");

  }
}
