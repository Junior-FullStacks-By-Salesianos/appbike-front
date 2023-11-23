import { Component } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html',
  styleUrl: './horizontal-navbar.component.css'
})
export class HorizontalNavbarComponent {
  title = 'appbike-front';
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.roles = ['ROLE_USER'];

      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      console.log(JSON.stringify(user));
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
