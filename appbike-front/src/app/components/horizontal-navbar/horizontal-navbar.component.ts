import { Component } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { UserService } from '../../services/user.service';
import { UserBikeResponse } from '../../models/user-bike.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html',
  styleUrl: './horizontal-navbar.component.css'
})
export class HorizontalNavbarComponent {

  title = 'appbike-front';
  isLoggedIn = false;
  isAdmin = false;
  isUser = false;
  user!: any;
  form: any = {
    recharge: null,
    pin: null,
  };
  userDetails!: UserBikeResponse;
  isLoadingModal = true;
  isSuccessful = false;
  errorMessage = '';
  incorrectPin = false;
  constructor(private tokenStorageService: TokenStorageService, private userService: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.user = this.tokenStorageService.getUser();

      this.isAdmin = this.user.role.includes('ROLE_ADMIN');
      this.isUser = this.user.role.includes('ROLE_USER');
      console.log(JSON.stringify(this.user));
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  openModal(arg0: any) {
    this.userService.getUserDetails().subscribe(resp => {
      this.userDetails = resp
      this.isLoadingModal = false;
    })
    this.modalService.open(arg0, {
      keyboard: false

    })
  }

  onSubmit() {
    this.userService.recharge(this.form).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.ngOnInit();
      },
      error: err => {
        if (err.status == 400) {
          this.incorrectPin = true;
          debugger
        }
        this.errorMessage = err.error.message;
        console.log(err);
      },
    });
  }
}
