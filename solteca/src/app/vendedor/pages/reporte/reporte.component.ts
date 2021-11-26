import { AdministradorService } from 'src/app/services/administrador.service';
import { TokenService } from 'src/app/services/token.service';
import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/models/auth/sucursales';
import { VendedorService } from 'src/app/services/vendedor.service';
import { Report } from 'src/app/models/vendedor/report';
import { CookieService } from 'ngx-cookie-service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css'],
})
export class ReporteComponent implements OnInit {
  vendedor: any;
  cargo: any;
  reports = [{
      Id_carrito: 0,
      Nombre_cliente: '',
      Origen: '',
      Destino: '',
      Tipo: '',
      Escala: '',
      Cantidad: 0,
      Precio: 0,
      Fecha_salida: '',
      Hora_salida: '',
      Telefono: '',
      Asiento: 0,
      Referencia: '',
      Id_venta: '',
      Estado: 0,
      Id_autobus: 0,
      Id_sucursal: '',
      Numero_autobus: '',
      Boletos: '',
      Suma: '',
      Trabajador: '',
      Count: ''
    }];
  reporte = {
    fechaInicio: '',
    fechaFinal: '',
    sucursal: '',
    idEmpleado: ''
  };
  sucursal: any;
  reportes: any;
  constructor(
    private TS: TokenService,
    private AS: AdministradorService,
    private VS: VendedorService,
    private CS: CookieService
  ) {}

  ngOnInit(): void {
    this.getSucursales();
    this.getInfo();
  }

  getSucursales(): void {
    // tslint:disable-next-line: deprecation
    this.TS.sucursales().subscribe((data: Sucursal) => {
      this.sucursal = data;
      console.log(this.sucursal);
    });
  }

  getReporte(): void {
    console.log(this.reporte);
    this.reporte.idEmpleado = this.CS.get('id');
    this.VS.reportes(this.reporte).subscribe((data: Report) => {
      this.reportes = data;
      // tslint:disable-next-line: only-arrow-functions typedef  space-before-function-paren
      this.reportes.sort(
        (
          a: { Numero_Autobus: number },
          b: { Numero_Autobus: number }
        ) => {
          if (a.Numero_Autobus > b.Numero_Autobus) {
            return 1;
          }
          if (a.Numero_Autobus < b.Numero_Autobus) {
            return -1;
          }
          // a must be equal to b
          return 0;
        }
      );
      console.log(this.reportes);
      this.reports = this.reportes;
      const contador = this.reports.length;
      console.log(contador);
      // tslint:disable-next-line: typedef tslint:disable-next-line: only-arrow-functions
      let j = '0';
      try {
        for (let i = 1; i <= contador; i++) {
          if (j === this.reportes[i].Numero_Autobus) {
            console.log('Igual' + i);
            this.reportes = this.reportes.filter((car: any) => {
              return car.Numero_Autobus !== j;
            });
          } else {
            console.log('Diferente ' + j);
            j = this.reportes[i].Numero_Autobus;
          }
        }
      } catch (e) {
        console.log('xd');
        this.reportes.sort(
          (a: { Fecha_salida: number }, b: { Fecha_salida: number }) => {
            if (a.Fecha_salida > b.Fecha_salida) {
              return 1;
            }
            if (a.Fecha_salida < b.Fecha_salida) {
              return -1;
            }
            // a must be equal to b
            return 0;
          }
        );
        console.log(this.reportes);
        return console.log(e);
      }
    });
  }

getInfo(): void {
    this.vendedor = this.CS.get('nombre');
    this.cargo = this.CS.get('cargo');
  }

salir(): void {
    this.AS.logout();
  }
}
