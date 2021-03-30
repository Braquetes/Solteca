import { AdministradorService } from './../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ventanilla',
  templateUrl: './ventanilla.component.html',
  styleUrls: ['./ventanilla.component.css'],
})
export class VentanillaComponent implements OnInit {
  constructor(
    private CS: CookieService,
    private router: Router,
    private AS: AdministradorService
  ) {}

  ngOnInit(): void {
    const cookie = this.CS.check('access_token');
    const client = this.CS.get('client');
    if (cookie) {
      if (client === 'administrador') {
        this.router.navigate(['/menu']);
      }
    }
  }

  salir(): void {
    this.AS.logout();
  }
}
