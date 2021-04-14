import { Asiento } from './../../models/vendedor/asiento';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VendedorService } from 'src/app/services/vendedor.service';
import { ARequest } from 'src/app/models/vendedor/asientoRequest';
import { Router } from '@angular/router';
import { Camion } from 'src/app/models/vendedor/botones';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.css'],
})
export class ProofComponent implements OnInit {
  suscription: Subscription | undefined;
  asiento: any | undefined;
  camion: Camion | any;
  Camion = {
    Id_pendiente: 0,
    Corrida: 100,
    Asiento: 0,
    Estado: 1,
  };
  estado = 1;
  persona: any;
  contador = [{Id_pendiente: 0, Corrida: 0, Asiento: 0, Estado: 1 }];
  xd = 0;
  constructor(
    private VS: VendedorService,
    private RT: Router,
    private CS: CookieService
  ) {}

  ngOnInit(): void {
    // this.getAsientos();
    // // tslint:disable-next-line: deprecation
    // this.suscription = this.VS.refresh$.subscribe(() => {
    //   this.getAsientos();
    // });
    // // this.obtener();
    //
    // tslint:disable-next-line: no-var-keyword tslint:disable-next-line: prefer-const
    var items = [
      { name: 'Edward', value: 21 },
      { name: 'Sharpe', value: 37 },
      { name: 'And', value: 45 },
      { name: 'The', value: -12 },
      { name: 'Magnetic', value: 13 },
      { name: 'Zeros', value: 37 },
    ];
    // tslint:disable-next-line: only-arrow-functions tslint:disable-next-line: typedef
    items.sort(function(a, b) {
      if (a.value < b.value) {
        return 1;
      }
      if (a.value > b.value) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    console.log(items);
  }

  // getAsientos(): void {
  //   // tslint:disable-next-line: deprecation
  //   this.VS.camion().subscribe((data: Asiento) => {
  //     this.asiento = data;
  //     this.camion = this.asiento;
  //     for (const val of this.camion) {
  //       this.Camion.Id_pendiente = val.Asiento;
  //       // console.log(val);
  //     }
  //   });
  // }

  // updateAsientos(asiento: number, id: number): void {
  //   console.log('Agregar');
  //   this.Camion.Asiento = asiento;
  //   this.Camion.Id_pendiente = id;
  //   this.Camion.Estado = this.estado;
  //   console.log(this.Camion);
  //   // this.CS.set(this.Camion.Corrida.toString() + this.Camion.Id_pendiente.toString(), JSON.stringify(this.Camion), 1, '/proof');
  //   // this.persona = JSON.parse(localStorage.getItem('Asiento') || 'Default Value');
  //   this.contador.push({Id_pendiente: this.Camion.Id_pendiente, Corrida: this.Camion.Corrida, Asiento: this.Camion.Asiento, Estado: 1});
  //   // console.log(this.contador);
  //   // localStorage.setItem('Asiento', JSON.stringify(this.contador));
  //     // tslint:disable-next-line: deprecation
  //   this.VS.asientoPendiente(this.Camion).subscribe((datos: ARequest) => {
  //     if (datos.resultado === 'OK') {
  //       console.log(datos.mensaje);
  //     }
  //   });
  //   // if (this.boton1 === false) {
  //   //   this.boton1 = true;
  //   //   this.camion.Asiento = asiento;
  //   //   this.camion.Corrida = this.corrida;
  //   //   this.camion.Estado = 1;
  //   //   // tslint:disable-next-line: deprecation
  //   //   this.VS.asientoPendiente(this.camion).subscribe((datos: ARequest) => {
  //   //     if (datos.resultado === 'OK') {
  //   //       console.log(datos.mensaje);
  //   //     }
  //   //   });
  //   // }
  // }

  // deleteAsientos(corrida: number, asiento: number, id: number): void {
  //   console.log(asiento);
  //   console.log('Eliminar');
  //   // tslint:disable-next-line: deprecation
  //   this.VS.deletePendiente(corrida, asiento, id).subscribe(
  //     (data: ARequest) => {
  //       if (data.resultado === 'OK') {
  //         console.log(data.mensaje);
  //       }
  //     }
  //   );
  //   // this.CS.delete(this.Camion.Corrida.toString() + this.Camion.Id_pendiente.toString(), '/proof');
  //   // // tslint:disable-next-line: deprecation
  //   // this.VS.deletePendiente(this.corrida, asiento).subscribe(
  //   //   (data: ARequest) => {
  //   //     if (data.resultado === 'OK') {
  //   //       console.log(data.mensaje);
  //   //       this.boton1 = false;
  //   //     }
  //   //   }
  //   // );
  // }

  // obtener(): void {
  //   this.persona = JSON.parse(
  //     localStorage.getItem('Asiento') || 'Default Value'
  //   );
  //   console.log(this.persona);
  // }
}
