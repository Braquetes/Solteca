import { Idventa } from './../../../models/vendedor/idVenta';
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
import { Descuentos } from 'src/app/models/vendedor/descuentos';
import Swal from 'sweetalert2';

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
    Referencia: '',
    Id_venta: '',
    Estado: 0,
    Id_autobus: 0,
    Id_sucursal: '',
  };

  boletos: any | undefined;
  rutas: any | undefined;
  escalas: any | undefined;
  carro: any | undefined;
  autobus: any | undefined;
  autobs: any;
  lugares: any | undefined;
  ruta: any | undefined;

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
      Referencia: '',
      Id_venta: '',
      Estado: 0,
      Id_autobus: 0,
      Id_sucursal: '',
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

  venta0 = '';
  venta1 = '';
  venta2 = '';
  venta3 = '';
  venta4 = 4;
  venta5 = 5;
  venta6 = 6;
  venta7 = 7;
  venta8 = 8;
  venta9 = 9;
  venta10 = 10;
  venta11 = 11;
  venta12 = 12;
  venta13 = 13;
  venta14 = 14;
  venta15 = 15;
  venta16 = 16;
  venta17 = 17;
  venta18 = 18;
  venta19 = 19;
  venta20 = 20;
  venta21 = 21;
  venta22 = 22;
  venta23 = 23;
  venta24 = 24;
  venta25 = 25;
  venta26 = 26;
  venta27 = 27;
  venta28 = 28;
  venta29 = 29;
  venta30 = 30;
  venta31 = 31;
  venta32 = 32;
  venta33 = 33;
  venta34 = 34;
  venta35 = 35;
  venta36 = 36;
  venta37 = 37;
  venta38 = 38;
  venta39 = 39;
  venta40 = 40;
  venta41 = 41;
  venta42 = 42;
  venta43 = 43;
  venta44 = 44;
  venta45 = 45;
  venta46 = 46;
  venta47 = 47;
  venta48 = 48;
  venta49 = 49;
  venta50 = 50;
  venta51 = 51;
  venta52 = 52;
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

  lugar: any;
  rutaSelect: any;
  lugarSelect: any;
  lugarSelectRuta: any;
  boleto: any;
  bolets = [
    {
      Id_boleto: 0,
      Tipo: '',
      Precio: 0,
      Ruta: '',
    },
  ];
  bolts = [
    {
      Id_boleto: 0,
      Tipo: '',
      Precio: 0,
      Ruta: '',
    },
  ];
  vendidos = [{ tipo: '', vendido: 0 }];
  results: any;
  numeroFolio: any;
  referencia: any;
  descuentos: any;
  descuento: any;
  descuents = [{ Id_descuento: 0, Tipo: '', Descuento: '' }];
  precioDescuento1: any;
  longitudCamion: any;
  longitud = '';
  vendedor: any;
  turno: any;
  tipoCamion: any;
  reload = 0;
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
    this.folio();
    this.cookies();
    this.getBoletos();
    this.getRutas();
    this.getLugares();
    this.getEscala();
    this.getAutobus();
    // this.recargar();
    this.getIdVenta();
    this.getDescuentos();
    this.getInfo();
    // tslint:disable-next-line: deprecation
    this.suscription = this.VS.refresh$.subscribe(() => {
      this.recargar();
    });
  }

  getIdVenta(): void {
    const idVenta = this.CS.get('Id_venta');
    if (!idVenta) {
      // tslint:disable-next-line: deprecation
      this.VS.idVenta().subscribe((data: Idventa) => {
        if (data.resultado === 'OK') {
          console.log(data.mensaje);
          this.idVenta = data.Id_venta;
          this.CS.set('Id_venta', this.idVenta.toString(), 30, '/');
        }
      });
    } else {
      this.idVenta = idVenta;
    }
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

  getDescuentos(): void {
    // tslint:disable-next-line: deprecation
    this.VS.descuentos().subscribe((data: Descuentos) => {
      this.descuentos = data;
      console.log(this.descuentos);
    });
  }

  getAutobus(): void {
    // tslint:disable-next-line: deprecation
    this.VS.autobus().subscribe((data: Autobus) => {
      this.autobus = data;
      console.log(this.autobus);
    });
  }

  boton(value: number): void {
    this.venta.Cantidad += 1;
    // this.venta.Numero_asiento += value + ' , ';
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
    localStorage.removeItem('Longitud');
    if (this.venta.Destino !== '') {
      // if (!localStorage.getItem('Longitud')) {
      //   this.autobs = this.autobus;
      //   for (const raw of this.autobs) {
      //     if (raw.Id_autobus === this.venta.Id_autobus) {
      //       console.log('raw');
      //       this.longitud = raw.Tamaño;
      //       localStorage.setItem('Longitud', this.longitud);
      //       this.longitudCamion = localStorage.getItem('Longitud');
      //       console.log(this.longitudCamion);
      //     }
      //   }
      // }
      this.VS.camion(
        this.venta.Origen,
        this.venta.Destino,
        this.venta.Fecha_salida,
        this.venta.Hora_salida
        // tslint:disable-next-line: deprecation
      ).subscribe((data: Carrito) => {
        this.carro = data;
        for (const val of this.carro) {
          this.longitud = val.Id_autobus;
          this.carrito.push(val);
          this.contador = this.carrito.length;
        }
        console.log('DB');
        // tslint:disable-next-line: only-arrow-functions typedef  space-before-function-paren
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
      console.log(this.carrito);
      if (this.venta.Destino !== '' && this.venta.Origen !== '') {
        this.ruta = this.rutas;
        for (const val of this.ruta) {
          if (
            val.Lugar_salida === this.venta.Origen &&
            val.Lugar_destino === this.venta.Destino
          ) {
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
            this.descuento = this.descuentos;
            for (const vall of this.descuento) {
              if (val.Tipo === vall.Tipo) {
                this.descuents.push(vall);
                console.log('Descuents');
                console.log(this.descuents);
                for (const valll of this.bolets) {
                  if (valll.Tipo === vall.Tipo) {
                    console.log('Precio - Descuento');
                    console.log(valll.Precio);
                    console.log(vall.Descuento);
                    if (vall.Descuento > 0) {
                      valll.Precio =
                        valll.Precio - (valll.Precio * vall.Descuento) / 100;
                    } else {
                      valll.Precio = val.Precio;
                    }
                    this.bolts.push(valll);
                    console.log('Bolts');
                    console.log(this.bolts);
                  }
                }
              }
            }
          }
        }
        while (this.boletos.length > 0) {
          this.boletos.pop();
        }
      }
      this.reload++;
      if (this.reload === 2) {
        this.alerta = 'Actualizado';
      }
    }
    for (let i = 0; i < this.contador; i++) {
      console.log('Id_camion');
      console.log(this.longitudCamion);
      console.log('Carrito');
      console.log(this.carrito);
      // tslint:disable-next-line: prefer-const
      let x = this.carrito[i].Asiento.toString();
      switch (x) {
        case '1':
          // tslint:disable-next-line: radix
          this.venta1 = this.carrito[i].Id_venta;
          console.log('Venta 1: ' + this.venta1);
          if (this.venta1 === this.CS.get('Id_venta')){
            console.log('Igual');
            this.boton1 = 3;
            this.asiento1 = this.carrito[i].Asiento;
          }else{
            console.log('Diferente');
            this.boton1 = this.carrito[i].Estado;
            this.asiento1 = this.carrito[i].Asiento;
          }
          console.log('Arreglo 1' + ' , ' + i);
          console.log(this.asiento1);
          break;
        case '2':
          this.boton2 = this.carrito[i].Estado;
          this.asiento2 = this.carrito[i].Asiento;
          this.venta2 = this.carrito[i].Id_venta;
          console.log('Venta 2: ' + this.venta2);
          break;
        case '3':
          this.boton3 = this.carrito[i].Estado;
          this.asiento3 = this.carrito[i].Asiento;
          this.venta3 = this.carrito[i].Id_venta;
          console.log('Venta 3: ' + this.venta3);
          break;
        case '4':
          this.boton4 = this.carrito[i].Estado;
          this.asiento4 = this.carrito[i].Asiento;
          break;
        case '5':
          this.boton5 = this.carrito[i].Estado;
          this.asiento5 = this.carrito[i].Asiento;
          break;
        case '6':
          this.boton6 = this.carrito[i].Estado;
          this.asiento6 = this.carrito[i].Asiento;
          break;
        case '7':
          this.boton7 = this.carrito[i].Estado;
          this.asiento7 = this.carrito[i].Asiento;
          break;
        case '8':
          this.boton8 = this.carrito[i].Estado;
          this.asiento8 = this.carrito[i].Asiento;
          break;
        case '9':
          this.boton9 = this.carrito[i].Estado;
          this.asiento9 = this.carrito[i].Asiento;
          break;
        case '10':
          this.boton10 = this.carrito[i].Estado;
          this.asiento10 = this.carrito[i].Asiento;
          break;
        case '11':
          this.boton11 = this.carrito[i].Estado;
          this.asiento11 = this.carrito[i].Asiento;
          break;
        case '12':
          this.boton12 = this.carrito[i].Estado;
          this.asiento12 = this.carrito[i].Asiento;
          break;
        case '13':
          this.boton13 = this.carrito[i].Estado;
          this.asiento13 = this.carrito[i].Asiento;
          break;
        case '14':
          this.boton14 = this.carrito[i].Estado;
          this.asiento14 = this.carrito[i].Asiento;
          break;
        case '15':
          this.boton15 = this.carrito[i].Estado;
          this.asiento15 = this.carrito[i].Asiento;
          break;
        case '16':
          this.boton16 = this.carrito[i].Estado;
          this.asiento16 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '17':
          this.boton17 = this.carrito[i].Estado;
          this.asiento17 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '18':
          this.boton18 = this.carrito[i].Estado;
          this.asiento18 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '19':
          this.boton19 = this.carrito[i].Estado;
          this.asiento19 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '20':
          this.boton20 = this.carrito[i].Estado;
          this.asiento20 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '21':
          this.boton21 = this.carrito[i].Estado;
          this.asiento21 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '22':
          this.boton22 = this.carrito[i].Estado;
          this.asiento22 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '23':
          this.boton23 = this.carrito[i].Estado;
          this.asiento23 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '24':
          this.boton24 = this.carrito[i].Estado;
          this.asiento24 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '25':
          this.boton25 = this.carrito[i].Estado;
          this.asiento25 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '26':
          this.boton26 = this.carrito[i].Estado;
          this.asiento26 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '27':
          this.boton27 = this.carrito[i].Estado;
          this.asiento27 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '28':
          this.boton28 = this.carrito[i].Estado;
          this.asiento28 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '29':
          this.boton29 = this.carrito[i].Estado;
          this.asiento29 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '30':
          this.boton30 = this.carrito[i].Estado;
          this.asiento30 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '31':
          this.boton31 = this.carrito[i].Estado;
          this.asiento31 = this.carrito[i].Asiento;
          console.log('Arreglo: ' + i);
          break;
        case '32':
          this.boton32 = this.carrito[i].Estado;
          this.asiento32 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '33':
          this.boton33 = this.carrito[i].Estado;
          this.asiento33 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          console.log(this.asiento2);
          break;
        case '34':
          this.boton34 = this.carrito[i].Estado;
          this.asiento34 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          console.log(this.asiento3);
          break;
        case '35':
          this.boton35 = this.carrito[i].Estado;
          this.asiento35 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '36':
          this.boton36 = this.carrito[i].Estado;
          this.asiento36 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '37':
          this.boton37 = this.carrito[i].Estado;
          this.asiento37 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '38':
          this.boton38 = this.carrito[i].Estado;
          this.asiento38 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '39':
          this.boton39 = this.carrito[i].Estado;
          this.asiento39 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '40':
          this.boton40 = this.carrito[i].Estado;
          this.asiento40 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '41':
          this.boton41 = this.carrito[i].Estado;
          this.asiento41 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '42':
          this.boton42 = this.carrito[i].Estado;
          this.asiento42 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '43':
          this.boton43 = this.carrito[i].Estado;
          this.asiento43 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          console.log(this.asiento2);
          break;
        case '44':
          this.boton44 = this.carrito[i].Estado;
          this.asiento44 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          console.log(this.asiento3);
          break;
        case '45':
          this.boton45 = this.carrito[i].Estado;
          this.asiento45 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '46':
          this.boton46 = this.carrito[i].Estado;
          this.asiento46 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '47':
          this.boton47 = this.carrito[i].Estado;
          this.asiento47 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '48':
          this.boton48 = this.carrito[i].Estado;
          this.asiento48 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '49':
          this.boton49 = this.carrito[i].Estado;
          this.asiento49 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '50':
          this.boton50 = this.carrito[i].Estado;
          this.asiento50 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '51':
          this.boton51 = this.carrito[i].Estado;
          this.asiento51 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        case '52':
          this.boton52 = this.carrito[i].Estado;
          this.asiento52 = this.carrito[i].Asiento;
          console.log('Arreglo' + ' , ' + i);
          break;
        default: {
          console.log('Error' + ' ' + x);
          break;
        }
      }
      if (this.venta.Destino !== '') {
        if (this.longitud !== '') {
          this.autobs = this.autobus;
          for (const raw of this.autobs) {
            if (raw.Id_autobus === this.longitud) {
              console.log('raw');
              this.longitud = raw.Tamaño;
              localStorage.setItem('Longitud', this.longitud);
              this.longitudCamion = localStorage.getItem('Longitud');
              console.log(this.longitudCamion);
            }
          }
        } else {
          if (!localStorage.getItem('Longitud')) {
            this.autobs = this.autobus;
            for (const raw of this.autobs) {
              if (raw.Id_autobus === this.venta.Id_autobus) {
                console.log('raw');
                this.longitud = raw.Tamaño;
                localStorage.setItem('Longitud', this.longitud);
                this.longitudCamion = localStorage.getItem('Longitud');
                console.log(this.longitudCamion);
              }
            }
          }
        }
      }
    }
    if (this.venta.Destino !== '') {
      if (!localStorage.getItem('Longitud')) {
        this.autobs = this.autobus;
        for (const raw of this.autobs) {
          if (raw.Id_autobus === this.venta.Id_autobus) {
            console.log('raw');
            this.longitud = raw.Tamaño;
            localStorage.setItem('Longitud', this.longitud);
            this.longitudCamion = localStorage.getItem('Longitud');
            console.log(this.longitudCamion);
          }
        }
      }
    }
    while (this.carrito.length > 0) {
      this.carrito.pop();
    }
    this.folio();
  }

  clean(asiento: number): void{
    // tslint:disable-next-line: prefer-const
    let idventa = this.CS.get('Id_venta');
    console.log('clean');
    // tslint:disable-next-line: radix
    this.VS.deleteVentanilla(asiento, idventa).subscribe((datos: ARequest) => {
      if (datos.resultado === 'OK') {
        console.log(datos.mensaje);
      } else {
        alert(datos.mensaje);
      }
    });
  }

  updateAsientos(asiento: number): void {
    if (
      this.venta.Nombre_cliente !== '' &&
      this.venta.Origen !== '' &&
      this.venta.Destino !== '' &&
      this.venta.Tipo !== '' &&
      this.venta.Id_autobus !== 0 &&
      this.venta.Precio !== 0 &&
      this.venta.Fecha_salida !== '' &&
      this.venta.Hora_salida !== '' &&
      this.venta.Telefono !== ''
    ) {
      console.log('Agregar');
      console.log(asiento);
      this.venta.Asiento = asiento;
      this.venta.Cantidad = this.venta.Cantidad * 1 + 1;
      this.total = this.venta.Cantidad * this.venta.Precio;
      // this.venta.Numero_asiento += asiento + ', ';
      this.venta.Estado = this.estado;
      this.venta.Id_sucursal = this.CS.get('sucursal');
      this.venta.Id_venta = this.CS.get('Id_venta');
      console.log(this.venta);
      // tslint:disable-next-line: deprecation
      this.VS.carrito(this.venta).subscribe((datos: ARequest) => {
        if (datos.resultado === 'OK') {
          console.log(datos.mensaje);
        } else {
          // alert(datos.mensaje);
          Swal.fire({
            icon: 'info',
            title: datos.mensaje,
            showConfirmButton: false,
            timer: 1500,
          });
          this.recargar();
        }
      });
    } else {
      console.log('Error');
      // console.log('Agregar');
      // console.log(asiento);
    }
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
      // localStorage.setItem('Numero_Asiento', this.venta.Numero_asiento);
      localStorage.setItem('Total', this.total.toString());
      localStorage.setItem('Total', this.venta.Precio.toString());
      localStorage.setItem('Id_venta', this.venta.Id_venta.toString());
      localStorage.setItem('Camion', this.venta.Id_autobus.toString());
      localStorage.setItem('Referencia', this.venta.Referencia);
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
      this.referencia = localStorage.getItem('Referencia');

      this.venta.Nombre_cliente = this.cliente;
      this.venta.Origen = this.origen;
      this.venta.Destino = this.destino;
      this.venta.Fecha_salida = this.fecha;
      this.venta.Hora_salida = this.hora;
      this.venta.Escala = this.escala;
      this.venta.Tipo = this.tipo;
      this.venta.Cantidad = this.cantidad;
      this.venta.Telefono = this.telefono;
      // this.venta.Numero_asiento = this.numAsiento;
      this.venta.Id_venta = this.idVenta;
      this.venta.Id_autobus = this.camion;
      this.venta.Referencia = this.referencia;
    }
  }

  folio(): void {
    if (this.CS.get('Folio')) {
      this.numeroFolio = this.CS.get('Folio');
    } else {
      this.results = '';
      const characters = '0123456789012345678';
      const charactersLength = characters.length;
      for (let i = 0; i < charactersLength; i++) {
        this.results += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      this.numeroFolio = this.results;
      this.CS.set('Folio', this.numeroFolio, 1, '/');
    }
  }

  getInfo(): void {
    this.vendedor = this.CS.get('nombre');
    this.turno = this.CS.get('turno');
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
      this.venta.Cantidad !== 0 &&
      this.venta.Id_autobus !== 0 &&
      this.venta.Precio !== 0 &&
      this.venta.Fecha_salida !== '' &&
      this.venta.Hora_salida !== '' &&
      this.venta.Telefono !== '' &&
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
