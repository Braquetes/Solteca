import { Boletos } from './../models/vendedor/boletos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Asiento } from '../models/vendedor/asiento';
import { tap } from 'rxjs/operators';
import { ARequest } from '../models/vendedor/asientoRequest';
import { Rutas } from '../models/vendedor/rutas';
import { Escala } from '../models/vendedor/escala';
import { Carrito } from '../models/vendedor/carrito';

@Injectable({
  providedIn: 'root',
})
export class VendedorService {
  // tslint:disable-next-line: variable-name
  private _refresh$ = new Subject<void>();

  URL = 'https://solteca.ml/API-solteca/vendedor/';

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  get refresh$() {
    return this._refresh$;
  }

  camion(origen: string, destino: string): Observable<Carrito> {
    return this.http.get<Carrito>(`${this.URL}asientos.php?origen=${origen}&destino=${destino}`);
  }

  carrito(asiento: Carrito): Observable<ARequest> {
    return this.http
      .post<ARequest>(
        `${this.URL}carro/carrito.php`,
        JSON.stringify(asiento)
      )
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }

  deletePendiente(corrida: number, asiento: number, id: number): Observable<ARequest> {
    return this.http
      .get<ARequest>(
        `${this.URL}delete.php?Corrida=${corrida}&Asiento=${asiento}&Id_pendiente=${id}`)
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }

  boletos(): Observable<Boletos> {
    return this.http.get<Boletos>(`${this.URL}precios/preciosTabla.php`);
  }

  rutas(): Observable<Rutas> {
    return this.http.get<Rutas>(`${this.URL}form/rutas.php`);
  }

  escala(): Observable<Escala> {
    return this.http.get<Escala>(`${this.URL}form/escala.php`);
  }

}
