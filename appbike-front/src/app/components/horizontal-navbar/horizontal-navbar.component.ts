import { Component } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html',
  styleUrl: './horizontal-navbar.component.css'
})
export class HorizontalNavbarComponent {
  title = 'appbike-front';
  isLoggedIn = false;
  isAdmin = false;
  user! :any;


  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.user = this.tokenStorageService.getUser();

      this.isAdmin = this.user.role.includes('ROLE_ADMIN');
      console.log(JSON.stringify(this.user));
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
