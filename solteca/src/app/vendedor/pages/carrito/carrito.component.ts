import { Carrito } from './../../../models/vendedor/carrito';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VendedorService } from 'src/app/services/vendedor.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  venta = [
    {
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
      Numero_asiento: '',
      Id_venta: 0,
      Estado: 0,
    },
  ];
  carro: any | undefined;
  carrito = [
    {
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
      Numero_asiento: '',
      Id_venta: 0,
      Estado: 0
    }
  ];
  total = 0;
  constructor(
    private CS: CookieService,
    private router: Router,
    private VS: VendedorService
  ) {}

  ngOnInit(): void {
    const cookie = this.CS.check('access_token');
    const client = this.CS.get('client');
    if (cookie) {
      if (client === 'administrador') {
        this.router.navigate(['/menu']);
      }
    }
    // tslint:disable-next-line: deprecation
    this.VS.camion('Oaxaca', 'México').subscribe((data: Carrito) => {
      this.carro = data;
      for (const val of this.carro) {
        this.carrito.push(val);
        this.total += val.Cantidad;
      }
      console.log('DB');
      console.log(this.carro);
      // tslint:disable-next-line: only-arrow-functions tslint:disable-next-line: typedef
      this.carrito.sort(function(a, b) {
        if (a.Asiento > b.Asiento) {
          return 1;
        }
        if (a.Asiento < b.Asiento) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    });
    while (this.carrito.length > 0) {
      this.carrito.pop();
    }
    console.log(this.carrito);
  }
}
