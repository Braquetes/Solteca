import { Carrito } from './../../../models/vendedor/carrito';
import { Camion } from 'src/app/models/vendedor/botones';
import { AdministradorService } from './../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PuedeDesactivar } from 'src/app/guards/forms.guard';
import { Subscription } from 'rxjs';
import { Asiento } from 'src/app/models/vendedor/asiento';
import { ARequest } from 'src/app/models/vendedor/asientoRequest';
import { VendedorService } from 'src/app/services/vendedor.service';
import { Boletos } from 'src/app/models/vendedor/boletos';
import { Lugares} from 'src/app/models/vendedor/lugares';
import { Escala } from 'src/app/models/vendedor/escala';
import { Autobus } from 'src/app/models/vendedor/camion';
import { Rutas } from 'src/app/models/vendedor/rutas';

@Component({
  selector: 'app-ventanilla',
  templateUrl: './ventanilla.component.html',
  styleUrls: ['./ventanilla.component.css'],
})
export class VentanillaComponent implements OnInit, PuedeDesactivar {
  venta = {
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
  };

  boletos: any | undefined;
  rutas: any | undefined;
  escalas: any | undefined;
  carro: any | undefined;
  autobus: any | undefined;
  lugares: any | undefined;
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
    },
  ];
  suscription: Subscription | undefined;
  asiento: any | undefined;
  estado = 1;
  persona: any;
  contador = 0;
  enviado = false;
  logout = false;
  xd = [{ Id_pendiente: 0, Corrida: 0, Asiento: 0, Estado: 0 }];
  boton0 = 0;
  boton1 = 0;
  boton2 = 0;
  boton3 = 0;
  boton4 = 0;
  boton5 = 0;
  boton6 = 0;
  boton7 = 0;
  boton8 = 0;
  boton9 = 0;
  boton10 = 0;
  boton11 = 0;
  boton12 = 0;
  boton13 = 0;
  boton14 = 0;
  boton15 = 0;
  boton16 = 0;
  boton17 = 0;
  boton18 = 0;
  boton19 = 0;
  boton20 = 0;
  boton21 = 0;
  boton22 = 0;
  boton23 = 0;
  boton24 = 0;
  boton25 = 0;
  boton26 = 0;
  boton27 = 0;
  boton28 = 0;
  boton29 = 0;
  boton30 = 0;
  boton31 = 0;
  boton32 = 0;
  boton33 = 0;
  boton34 = 0;
  boton35 = 0;
  boton36 = 0;
  boton37 = 0;
  boton38 = 0;
  boton39 = 0;
  boton40 = 0;
  boton41 = 0;
  boton42 = 0;
  boton43 = 0;
  boton44 = 0;
  boton45 = 0;
  boton46 = 0;
  boton47 = 0;
  boton48 = 0;
  boton49 = 0;
  boton50 = 0;
  boton51 = 0;
  boton52 = 0;

  asiento0 = 0;
  asiento1 = 1;
  asiento2 = 2;
  asiento3 = 3;
  asiento4 = 4;
  asiento5 = 5;
  asiento6 = 6;
  asiento7 = 7;
  asiento8 = 8;
  asiento9 = 9;
  asiento10 = 10;
  asiento11 = 11;
  asiento12 = 12;
  asiento13 = 13;
  asiento14 = 14;
  asiento15 = 15;
  asiento16 = 16;
  asiento17 = 17;
  asiento18 = 18;
  asiento19 = 19;
  asiento20 = 20;
  asiento21 = 21;
  asiento22 = 22;
  asiento23 = 23;
  asiento24 = 24;
  asiento25 = 25;
  asiento26 = 26;
  asiento27 = 27;
  asiento28 = 28;
  asiento29 = 29;
  asiento30 = 30;
  asiento31 = 31;
  asiento32 = 32;
  asiento33 = 33;
  asiento34 = 34;
  asiento35 = 35;
  asiento36 = 36;
  asiento37 = 37;
  asiento38 = 38;
  asiento39 = 39;
  asiento40 = 40;
  asiento41 = 41;
  asiento42 = 42;
  asiento43 = 43;
  asiento44 = 44;
  asiento45 = 45;
  asiento46 = 46;
  asiento47 = 47;
  asiento48 = 48;
  asiento49 = 49;
  asiento50 = 50;
  asiento51 = 51;
  asiento52 = 52;
  total: any;
  xdxd = 0;
  origen: any;
  destino: any;
  fecha: any;
  hora: any;
  escala: any;
  cliente: any;
  tipo: any;
  telefono: any;
  cantidad: any;
  numAsiento: any;
  idVenta: any;
  camion: any;

  alerta: any;

  ruta: any;
  lugar: any;
  rutaSelect: any;
  lugarSelect: any;
  lugarSelectRuta: any;
  boleto: any;
  bolets = [{
    Id_boleto: 0,
    Tipo: '',
    Precio: 0,
    Ruta: ''
  }];
  vendidos = [{tipo: '', vendido: 0}];

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
      if (client === 'administrador') {
        this.router.navigate(['/menu']);
      }
    }
    this.cookies();
    this.getBoletos();
    this.getRutas();
    this.getLugares();
    this.getEscala();
    this.getAutobus();
    this.recargar();
    // tslint:disable-next-line: deprecation
    this.suscription = this.VS.refresh$.subscribe(() => {
      this.recargar();
    });
  }

  getBoletos(): void {
    // tslint:disable-next-line: deprecation
    this.VS.boletos().subscribe((data: Boletos) => {
      this.boletos = data;
      console.log(this.boletos);
    });
  }

  getLugares(): void {
    // tslint:disable-next-line: deprecation
    this.VS.lugares().subscribe((data: Lugares) => {
      this.lugares = data;
      console.log(this.lugares);
    });
  }

  getRutas(): void {
    // tslint:disable-next-line: deprecation
    this.VS.rutas().subscribe((data: Rutas) => {
      this.rutas = data;
      console.log(this.rutas);
    });
  }

  getEscala(): void {
    // tslint:disable-next-line: deprecation
    this.VS.escala().subscribe((data: Escala) => {
      this.escalas = data;
      console.log(this.escalas);
    });
  }

  getAutobus(): void{
    // tslint:disable-next-line: deprecation
    this.VS.autobus().subscribe((data: Autobus) => {
      this.autobus = data;
      console.log(this.autobus);
    });
  }

  boton(value: number): void {
    this.venta.Cantidad += 1;
    this.venta.Numero_asiento += value + ' , ';
    console.log(value);
  }

  botons(value: number): void {
    console.log('Eliminar');
    console.log(value);
    // this.venta.Cantidad += 1;
    // this.venta.Numero_asiento += value + ' , ';
    // console.log(value);
  }

  recargar(): void {
    if (this.venta.Destino !== '') {
      // tslint:disable-next-line: deprecation
      this.VS.camion(this.venta.Origen, this.venta.Destino, this.venta.Fecha_salida, this.venta.Hora_salida).subscribe((data: Carrito) => {
        this.carro = data;
        for (const val of this.carro) {
          this.carrito.push(val);
          this.contador = this.carrito.length;
        }
        console.log('DB');
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
      console.log(this.carrito);
      if (this.venta.Destino !==  '' && this.venta.Origen !== ''){
        this.ruta = this.rutas;
        for (const val of this.ruta){
          if (val.Lugar_salida === this.venta.Origen && val.Lugar_destino === this.venta.Destino){
            this.rutaSelect = val.Precio;
            console.log(this.rutaSelect);
            this.lugarSelect = val.Lugar_destino;
            console.log(this.lugarSelect);
            this.lugarSelectRuta = val.Linea;
            console.log(this.lugarSelectRuta);
          }
        }
        this.boleto = this.boletos;
        for (const val of this.boleto) {
          if (val.Ruta === this.lugarSelect) {
            this.bolets.push(val);
            console.log('Boletos');
            console.log(this.bolets);
          }
        }
        while (this.boletos.length > 0) {
          this.boletos.pop();
        }
      }
      this.alerta = 'Actualizado';
    }
    for (let i = 0; i < this.contador; i++) {
      // tslint:disable-next-line: prefer-const
      let x = this.carrito[i].Asiento.toString();
      switch (x) {
        case '0':
          this.boton0 = this.carrito[i].Estado;
          this.asiento0 = this.carrito[i].Asiento;
          console.log('Arreglo: ' + i);
          console.log('Asiento: ' + this.asiento0);
          console.log('boton: ' + this.boton0);
          console.log('asiento: ' + this.asiento0);
          break;
        case '1':
          this.boton1 = this.carrito[i].Estado;
          this.asiento1 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          console.log(this.asiento1);
          console.log('boton: ' + this.boton1);
          console.log('asiento: ' + this.asiento1);
          break;
        case '2':
          this.boton2 = this.carrito[i].Estado;
          this.asiento2 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          console.log(this.asiento2);
          break;
        case '3':
          this.boton3 = this.carrito[i].Estado;
          this.asiento3 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          console.log(this.asiento3);
          break;
        case '4':
          this.boton4 = this.carrito[i].Estado;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '5':
          this.boton5 = this.carrito[i].Estado;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '6':
          this.boton6 = this.carrito[i].Estado;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '7':
          this.boton7 = this.carrito[i].Estado;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '8':
          this.boton8 = this.carrito[i].Estado;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '9':
          this.boton9 = this.carrito[i].Estado;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '10':
          this.boton10 = this.carrito[i].Estado;
          console.log('Arreglo' + ' , ' + i);
          break;
        default: {
          console.log('Error' + ' ' + x);
          break;
        }
      }
    }
    while (this.carrito.length > 0) {
      this.carrito.pop();
    }
  }

  updateAsientos(asiento: number): void {
    console.log('Agregar');
    console.log(asiento);
    this.venta.Asiento = asiento;
    this.venta.Cantidad = this.venta.Cantidad * 1 + 1;
    this.total = this.venta.Cantidad * this.venta.Precio;
    this.venta.Numero_asiento += asiento + ', ';
    this.venta.Estado = this.estado;
    // tslint:disable-next-line: deprecation
    this.VS.carrito(this.venta).subscribe((datos: ARequest) => {
      if (datos.resultado === 'OK') {
        console.log(datos.mensaje);
      }
    });

    // tslint:disable-next-line: deprecation
    // this.VS.asientoPendiente(this.Camion).subscribe((datos: ARequest) => {
    //   if (datos.resultado === 'OK') {
    //     console.log(datos.mensaje);
    //   }
    // });
    // this.CS.set(this.Camion.Corrida.toString() + this.Camion.Id_pendiente.toString(), JSON.stringify(this.Camion), 1, '/proof');
    // this.persona = JSON.parse(localStorage.getItem('Asiento') || 'Default Value');
    // this.contador.push({Id_pendiente: this.Camion.Id_pendiente, Corrida: this.Camion.Corrida, Asiento: this.Camion.Asiento, Estado: 1});
    // console.log(this.contador);
    // localStorage.setItem('Asiento', JSON.stringify(this.contador));
    // if (this.boton1 === false) {
    //   this.boton1 = true;
    //   this.camion.Asiento = asiento;
    //   this.camion.Corrida = this.corrida;
    //   this.camion.Estado = 1;
    //   // tslint:disable-next-line: deprecation
    //   this.VS.asientoPendiente(this.camion).subscribe((datos: ARequest) => {
    //     if (datos.resultado === 'OK') {
    //       console.log(datos.mensaje);
    //     }
    //   });
    // }
  }

  salir(): void {
    if (
      (this.venta.Nombre_cliente === '' && this.enviado === false) ||
      (this.venta.Nombre_cliente !== '' && this.enviado === false)
    ) {
      this.logout = window.confirm(
        '¿Quieres salir del formulario y perder los cambios realizados?'
      );
      if (this.logout) {
        this.AS.logout();
      }
    }
  }

  enviar(): void {
    console.log(this.venta);
    if (this.venta.Nombre_cliente !== '') {
      // alert('mensaje enviado: ' + this.venta.Cliente);
      this.enviado = true;
      localStorage.setItem('Origen', this.venta.Origen);
      localStorage.setItem('Destino', this.venta.Destino);
      localStorage.setItem('Fecha', this.venta.Fecha_salida);
      localStorage.setItem('Hora', this.venta.Hora_salida);
      localStorage.setItem('Escala', this.venta.Escala);
      localStorage.setItem('Cliente', this.venta.Nombre_cliente);
      localStorage.setItem('Tipo', this.venta.Tipo);
      localStorage.setItem('Telefono', this.venta.Telefono.toString());
      localStorage.setItem('Cantidad', this.venta.Cantidad.toString());
      localStorage.setItem('Numero_Asiento', this.venta.Numero_asiento);
      localStorage.setItem('Total', this.total.toString());
      localStorage.setItem('Total', this.venta.Precio.toString());
      localStorage.setItem('Id_venta', this.venta.Id_venta.toString());
      localStorage.setItem('Camion', this.venta.Id_autobus.toString());
      this.router.navigate(['/carrito']);
    } else {
      this.router.navigate(['/carrito']);
    }
  }

  cookies(): void {
    this.recargar();
    if (localStorage.getItem('Origen')) {
      this.origen = localStorage.getItem('Origen');
      this.destino = localStorage.getItem('Destino');
      this.fecha = localStorage.getItem('Fecha');
      this.hora = localStorage.getItem('Hora');
      this.escala = localStorage.getItem('Escala');
      this.cliente = localStorage.getItem('Cliente');
      this.tipo = localStorage.getItem('Tipo');
      this.cantidad = localStorage.getItem('Cantidad');
      this.telefono = localStorage.getItem('Telefono');
      this.numAsiento = localStorage.getItem('Numero_Asiento');
      this.total = localStorage.getItem('Total');
      this.idVenta = localStorage.getItem('Id_venta');
      this.camion = localStorage.getItem('Camion');

      this.venta.Nombre_cliente = this.cliente;
      this.venta.Origen = this.origen;
      this.venta.Destino = this.destino;
      this.venta.Fecha_salida = this.fecha;
      this.venta.Hora_salida = this.hora;
      this.venta.Escala = this.escala;
      this.venta.Tipo = this.tipo;
      this.venta.Cantidad = this.cantidad;
      this.venta.Telefono = this.telefono;
      this.venta.Numero_asiento = this.numAsiento;
      this.venta.Id_venta = this.idVenta;
      this.venta.Id_autobus = this.camion;
    }
  }

  permitirSalirDeRuta():
    | boolean
    | import('rxjs').Observable<boolean>
    | Promise<boolean> {
    if (
      this.venta.Nombre_cliente !== '' &&
      this.venta.Origen !== '' &&
      this.venta.Destino !== '' &&
      this.venta.Tipo !== '' &&
      this.venta.Escala !== '' &&
      this.venta.Cantidad !== 0 &&
      this.venta.Id_autobus !== 0 &&
      this.venta.Precio !== 0 &&
      this.venta.Fecha_salida !== '' &&
      this.venta.Hora_salida !== '' &&
      this.venta.Telefono !== '951' &&
      this.venta.Asiento !== 0 &&
      this.venta.Numero_asiento !== '' &&
      this.enviado === true
    ) {
      return true;
    }
    if (this.logout) {
      return this.logout;
    }
    const confirmacion = window.confirm(
      '¿Quieres salir del formulario y perder los cambios realizados?'
    );
    return confirmacion;
  }
}
