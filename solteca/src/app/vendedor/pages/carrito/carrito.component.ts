import { Carrito } from './../../../models/vendedor/carrito';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VendedorService } from 'src/app/services/vendedor.service';
import { ARequest } from 'src/app/models/vendedor/asientoRequest';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  carro: any | undefined;
  carrito = [
    {
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
      Numero_asiento: '',
      Id_venta: 0,
      Estado: 0,
      Id_autobus: 0
    }
  ];
  total = 0;
  origen: any;
  destino: any;
  fecha: any;
  hora: any;
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
    this.boletos();
  }

  boletos(): void{
    this.total = 0;
    this.origen = localStorage.getItem('Origen');
    this.destino = localStorage.getItem('Destino');
    this.fecha = localStorage.getItem('Fecha');
    this.hora = localStorage.getItem('Hora');
    console.log(this.origen);
    console.log(this.destino);
    console.log(this.fecha);
    console.log(this.hora);
    // tslint:disable-next-line: deprecation
    this.VS.camion(this.origen, this.destino, this.fecha, this.hora).subscribe((data: Carrito) => {
      this.carro = data;
      for (const val of this.carro) {
        this.carrito.push(val);
        this.total += val.Precio * 1;
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


  eliminar(id: number): void{
    console.log('Eliminar');
    // tslint:disable-next-line: deprecation
    this.VS.deletePendiente(id).subscribe(
      (data: ARequest) => {
        if (data.resultado === 'OK') {
          console.log(data.mensaje);
          this.boletos();
        }
      }
    );
    // this.CS.delete(this.Camion.Corrida.toString() + this.Camion.Id_pendiente.toString(), '/proof');
    // // tslint:disable-next-line: deprecation
    // this.VS.deletePendiente(this.corrida, asiento).subscribe(
    //   (data: ARequest) => {
    //     if (data.resultado === 'OK') {
    //       console.log(data.mensaje);
    //       this.boton1 = false;
    //     }
    //   }
    // );
  }

  generar(): void{
    console.log('Vender');
    // tslint:disable-next-line: deprecation
    this.VS.vender(this.carro).subscribe((datos: ARequest) => {
      if (datos.resultado === 'OK') {
        console.log(datos.mensaje);
      }
    });
  }

}
