import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Sucursal } from 'src/app/models/auth/sucursales';
import { Autobus } from 'src/app/models/vendedor/camion';
import { Lugares } from 'src/app/models/vendedor/lugares';
import { Report } from 'src/app/models/vendedor/report';
import { AdministradorService } from 'src/app/services/administrador.service';
import { TokenService } from 'src/app/services/token.service';
import { VendedorService } from 'src/app/services/vendedor.service';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css'],
})
export class BoletaComponent implements OnInit {
  vendedor: any;
  autobus: any;
  cargo: any;
  sucursal: any;
  lugares: any;
  reportes: any;
  id: any;
  constructor(
    private TS: TokenService,
    private VS: VendedorService,
    private CS: CookieService,
    private router: Router,
    private AS: AdministradorService,
    private AR: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.AR.snapshot.params.id;
    const cookie = this.CS.check('access_token');
    const client = this.CS.get('client');
    if (cookie) {
      if (client === 'Administrador') {
        this.router.navigate(['/menu']);
      }
    }
    this.getInfo();
    this.getSucursales();
    this.getReporte();
    this.getAutobus();
  }

  getInfo(): void {
    this.vendedor = this.CS.get('nombre');
    this.cargo = this.CS.get('cargo');
  }

  salir(): void {
    this.AS.logout();
  }

  getSucursales(): void {
    // tslint:disable-next-line: deprecation
    this.TS.sucursales().subscribe((data: Sucursal) => {
      this.sucursal = data;
      console.log(this.sucursal);
    });
  }

  getReporte(): void {
    console.log(this.id);
    this.VS.boleta(this.id).subscribe((data: Report) => {
      this.reportes = data;
      console.log(this.reportes);
    });
  }

  getLugares(): void {
    // tslint:disable-next-line: deprecation
    this.VS.lugares().subscribe((data: Lugares) => {
      this.lugares = data;
      console.log(this.lugares);
    });
  }

  print(id: number): void {
    console.log(id);
    this.router.navigate(['/boleta', id]);
  }

  getAutobus(): void {
    // tslint:disable-next-line: deprecation
    this.VS.autobus().subscribe((data: Autobus) => {
      this.autobus = data;
      console.log(this.autobus);
    });
  }
}
