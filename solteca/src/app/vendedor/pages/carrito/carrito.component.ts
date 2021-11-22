import { Carrito } from './../../../models/vendedor/carrito';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VendedorService } from 'src/app/services/vendedor.service';
import { ARequest } from 'src/app/models/vendedor/asientoRequest';
import { Ticket } from 'src/app/models/vendedor/ticket';
import Swal from 'sweetalert2';

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
      Precio: 0,
      Fecha_salida: '',
      Hora_salida: '',
      Telefono: '',
      Asiento: 0,
      Referencia: '',
      Id_venta: 0,
      Estado: 0,
      Id_autobus: 0,
      Id_sucursal: 0,
    },
  ];
  total = 0;
  origen: any;
  destino: any;
  fecha: any;
  hora: any;
  idVenta: any;
  vendedor: any;
  ticket: any;
  Folio: any;
  estilo: string | undefined;
  cantidad: any;
  cantidadPre: any;
  turno: any;

  constructor(
    private CS: CookieService,
    private router: Router,
    private VS: VendedorService
  ) {}

  ngOnInit(): void {
    const cookie = this.CS.check('access_token');
    const client = this.CS.get('client');
    if (cookie) {
      if (client === 'Administrador') {
        this.router.navigate(['/menu']);
      }
    }
    this.boletos();
    this.getInfo();
    this.getTicket();
  }

  boletos(): void {
    this.total = 0;
    this.origen = localStorage.getItem('Origen');
    this.destino = localStorage.getItem('Destino');
    this.fecha = localStorage.getItem('Fecha');
    this.hora = localStorage.getItem('Hora');
    this.idVenta = localStorage.getItem('Id_venta');
    this.cantidad = localStorage.getItem('Cantidad');
    console.log(this.cantidad);
    console.log(this.origen);
    console.log(this.destino);
    console.log(this.fecha);
    console.log(this.hora);
    // tslint:disable-next-line: deprecation
    this.VS.camionCarro(
      this.origen,
      this.destino,
      this.fecha,
      this.hora,
      this.idVenta
    ).subscribe((data: Carrito) => {
      this.carro = data;
      for (const val of this.carro) {
        this.carrito.push(val);
        this.total += val.Precio * 1;
        console.log('Total');
        console.log(this.total);
        localStorage.setItem('Total', this.total.toString());
        console.log('Proof');
        console.log(this.carrito.length);
      }
      console.log('DB');
      console.log(this.carro);
      // tslint:disable-next-line: only-arrow-functions tslint:disable-next-line: typedef space-before-function-paren
      this.carrito.sort(function (a, b) {
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

  eliminar(id: number): void {
    console.log('Eliminar' + id);
    this.cantidadPre = this.cantidad;
    this.cantidad = this.cantidadPre * 1 - 1;
    console.log(this.cantidad);
    localStorage.setItem('Cantidad', this.cantidad);
    // tslint:disable-next-line: deprecation
    this.VS.deletePendiente(id).subscribe((data: ARequest) => {
      if (data.resultado === 'OK') {
        console.log(data.mensaje);
        this.boletos();
      }
    });
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

  generar(): void {
    console.log('Vender');
    const idVenta = this.CS.get('Id_venta');
    // tslint:disable-next-line: deprecation
    this.VS.vender(idVenta).subscribe((datos: ARequest) => {
      if (datos.resultado === 'OK') {
        Swal.fire({
          icon: 'success',
          title: datos.mensaje,
          showConfirmButton: false,
          timer: 1000,
        });
        localStorage.clear();
        this.carrito = [];
        this.ngOnInit();
        this.CS.delete('Folio');
        this.CS.delete('Id_venta');
        this.router.navigate(['/recientes']);
      }
    });
  }

  getInfo(): void {
    this.vendedor = this.CS.get('nombre');
    this.Folio = this.CS.get('Folio');
    this.turno = this.CS.get('turno');
  }

  getTicket(): void {
    const idSucursal = this.CS.get('sucursal');
    // tslint:disable-next-line: deprecation
    this.VS.ticket(idSucursal).subscribe((data: Ticket) => {
      this.ticket = data;
      console.log(this.ticket);
    });
  }

  clean(): void {
    // tslint:disable-next-line: prefer-const
    let idventa = this.CS.get('Id_venta');
    console.log('clean');
    // tslint:disable-next-line: radix
    this.VS.deleteCarrito(idventa).subscribe((datos: ARequest) => {
      if (datos.resultado === 'OK') {
        console.log(datos.mensaje);
        localStorage.clear();
        this.router.navigate(['/recientes']);
      } else {
        alert(datos.mensaje);
      }
    });
  }
}
