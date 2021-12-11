import { TokenService } from 'src/app/services/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Sucursal } from 'src/app/models/auth/sucursales';
import { Report } from 'src/app/models/vendedor/report';
import { AdministradorService } from 'src/app/services/administrador.service';
import { VendedorService } from 'src/app/services/vendedor.service';
import { Lugares } from 'src/app/models/vendedor/lugares';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.css'],
})
export class ImprimirComponent implements OnInit {
  vendedor: any;
  cargo: any;
  impresion = {
    fecha: '',
    destino: '',
    sucursal: '',
  };
  sucursal: any;
  lugares: any;
  reportes: any;
  constructor(
    private TS: TokenService,
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
    this.getSucursales();
    this.getLugares();
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
    console.log(this.impresion);
    this.VS.imprimir(this.impresion).subscribe((data: Report) => {
      this.reportes = data;
      console.log(this.reportes);
      if (this.reportes.length === 0) {
        // alert(datos.mensaje);
        Swal.fire({
          icon: 'error',
          title: 'No hay ningun registro',
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  }

  getLugares(): void {
    // tslint:disable-next-line: deprecation
    this.VS.lugares().subscribe((data: Lugares) => {
      this.lugares = data;
      console.log(this.lugares);
    });
  }

  print(id: number): void{
    console.log(id);
    this.router.navigate(['/boleta', id]);
  }
}
