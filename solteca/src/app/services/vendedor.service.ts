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

  camion(origen: string, destino: string, fecha: string, hora: string): Observable<Carrito> {
    return this.http.get<Carrito>(
      `${this.URL}asientos.php?origen=${origen}&destino=${destino}&fechaSalida=${fecha}&horaSalida=${hora}`
    );
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

  deletePendiente(id: number): Observable<ARequest> {
    return this.http
      .get<ARequest>(
        `${this.URL}delete.php?Id_carrito=${id}`)
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

  autobus(): Observable<Autobus> {
    return this.http.get<Autobus>(`${this.URL}form/camion.php`);
  }

  rutas(): Observable<Rutas>{
    return this.http.get<Rutas>(`${this.URL}form/rutas.php`);
  }

  vender(vender: Carrito): Observable<ARequest>{
    return this.http.post<ARequest>(`${this.URL}carro/updateCarro.php`, JSON.stringify(vender));
  }

}
