import { Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { UserService } from '../../services/user.service';
import { UserBikeResponse } from '../../models/user-bike.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { TiempoTranscurridoService } from '../../services/tiempo-transcurrido.service';

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
  tiempoTranscurrido: string = '00:00:00';
  finViaje: boolean = false;
  terminado = true;

  constructor(private tokenStorageService: TokenStorageService, private userService: UserService, private modalService: NgbModal, private tiempoTranscurridoService: TiempoTranscurridoService, private router: Router) { }

  isHomeRoute(): any {
    if (this.router.url == "/home") return true;

    return false;
  }

  isBikeRoute(): any {
    if (this.router.url == "/rentabike") return true;

    return false;
  }
  isTravelRoute(): any {
    if (this.router.url == "/travels") return true;

    return false;
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.user = this.tokenStorageService.getUser();

      this.isAdmin = this.user.role.includes('ROLE_ADMIN');
      this.isUser = this.user.role.includes('ROLE_USER');
      console.log(JSON.stringify(this.user));
    }

    this.tiempoTranscurridoService.tiempoTranscurrido$.subscribe(tiempo => {
      this.tiempoTranscurrido = tiempo;
    });
    this.tiempoTranscurridoService.contadorIniciado$.subscribe((iniciado) => {
      this.terminado = false
    });
    this.tiempoTranscurridoService.contadorDetenido$.subscribe((detenido) => {
      this.terminado = true;
    });

  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
