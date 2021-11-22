import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdministradorService } from 'src/app/services/administrador.service';
import { VendedorService } from 'src/app/services/vendedor.service';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.css'],
})
export class ImprimirComponent implements OnInit {
  vendedor: any;
  cargo: any;
  constructor(
    private VS: VendedorService,
    private CS: CookieService,
    private router: Router,
    private AS: AdministradorService
  ) {}

  ngOnInit(): void {
    const cookie = this.CS.check('access_token');
    const client = this.CS.get('client');
    if (cookie) {
      if (client === 'Administrador') {
        this.router.navigate(['/menu']);
      }
    }
    this.getInfo();
  }

  getInfo(): void {
    this.vendedor = this.CS.get('nombre');
    this.cargo = this.CS.get('cargo');
  }

  salir(): void {
    this.AS.logout();
  }
}
