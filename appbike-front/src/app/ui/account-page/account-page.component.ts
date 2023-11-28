import { Component, OnInit } from '@angular/core';
import { BikeUserService } from '../../services/bike-user.service';
import { BikeUser } from '../../models/user.interface';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.css'
})
export class AccountPageComponent implements OnInit {
  userDetails!: BikeUser;
  today = this.getReadableDate();

  constructor(private bikeUserService: BikeUserService) { }

  ngOnInit(): void {
    let userId = localStorage.getItem('USER_ID');
    if (userId) {
      this.bikeUserService.getUserDetails(userId).subscribe(resp => {
        this.userDetails = resp;
      });
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
}
