import { AdministradorService } from './../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private CS: CookieService, private router: Router, private AS: AdministradorService) {}

  ngOnInit(): void {
    if (this.CS.get('access_token') === 'actualizar') {
      this.router.navigate(['/actualizar']);
    }
  }

  salir(): void {
    this.AS.logout();
  }

}
