import { Descuentos } from './../models/vendedor/descuentos';
import { Idventa } from './../models/vendedor/idVenta';
import { Carrito } from 'src/app/models/vendedor/carrito';
import { ARequest } from './../models/vendedor/asientoRequest';
import { Lugares } from '../models/vendedor/lugares';
import { Boletos } from './../models/vendedor/boletos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Asiento } from '../models/vendedor/asiento';
import { tap } from 'rxjs/operators';
import { Escala } from '../models/vendedor/escala';
import { Autobus } from '../models/vendedor/camion';
import { Rutas } from '../models/vendedor/rutas';
import { Ticket } from '../models/vendedor/ticket';

@Injectable({
  providedIn: 'root',
})
export class VendedorService {
  // tslint:disable-next-line: variable-name
  private _refresh$ = new Subject<void>();

  URL = 'https://braquetes.mx/API-solteca/vendedor/';

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  get refresh$() {
    return this._refresh$;
  }

  camion(
    origen: string,
    destino: string,
    fecha: string,
    hora: string
    ): Observable<Carrito> {
    return this.http.get<Carrito>(
      `${this.URL}asientos.php?origen=${origen}&destino=${destino}&fechaSalida=${fecha}&horaSalida=${hora}`
    );
  }

  camionCarro(
    origen: string,
    destino: string,
    fecha: string,
    hora: string,
    idVenta: string,
  ): Observable<Carrito> {
    return this.http.get<Carrito>(
      `${this.URL}asientosCarro.php?origen=${origen}&destino=${destino}&fechaSalida=${fecha}&horaSalida=${hora}&Id_venta=${idVenta}`
    );
  }

  carrito(asiento: Carrito): Observable<ARequest> {
    return this.http
      .post<ARequest>(`${this.URL}carro/carrito.php`, JSON.stringify(asiento))
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }

  deletePendiente(id: number): Observable<ARequest> {
    return this.http
      .get<ARequest>(`${this.URL}delete.php?Id_carrito=${id}`)
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }

  boletos(): Observable<Boletos> {
    return this.http.get<Boletos>(`${this.URL}precios/preciosTabla.php`);
  }

  lugares(): Observable<Lugares> {
    return this.http.get<Lugares>(`${this.URL}form/lugares.php`);
  }

  escala(): Observable<Escala> {
    return this.http.get<Escala>(`${this.URL}form/escala.php`);
  }

  descuentos(): Observable<Descuentos> {
    return this.http.get<Descuentos>(`${this.URL}form/descuentos.php`);
  }

  autobus(): Observable<Autobus> {
    return this.http.get<Autobus>(`${this.URL}form/camion.php`);
  }

  rutas(): Observable<Rutas> {
    return this.http.get<Rutas>(`${this.URL}form/rutas.php`);
  }

  idVenta(): Observable<Idventa> {
    return this.http.get<Idventa>(`${this.URL}carro/idVenta.php`);
  }

  ticket(idSucursal: string): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.URL}carro/ticket.php?Id_sucursal=${idSucursal}`);
  }

  vender(vender: string): Observable<ARequest> {
    return this.http.get<ARequest>(`${this.URL}carro/updateCarro.php?Id_venta=${vender}`);
  }
}
