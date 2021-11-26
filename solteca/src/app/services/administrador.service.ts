import { Observable } from 'rxjs';
import { Empleado } from './../models/admin/empleado';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../models/admin/response';

@Injectable({
  providedIn: 'root',
})
export class AdministradorService {
  enviado: any;
  constructor(
    private CS: CookieService,
    private router: Router,
    private http: HttpClient
  ) {}
  URL = 'https://integradora.ml/API-solteca/administrador/';

  addEmpleado(empleado: Empleado): Observable<Respuesta> {
    return this.http.post<Respuesta>(
      `${this.URL}empleados/addEmpleado.php`,
      JSON.stringify(empleado)
    );
  }

  editEmpleado(empleado: Empleado): Observable<Respuesta> {
    return this.http.post<Respuesta>(
      `${this.URL}empleados/updateEmpleado.php`,
      JSON.stringify(empleado)
    );
  }

  getEmpleados(): Observable<Respuesta> {
    return this.http.get<Respuesta>(`${this.URL}empleados/empleados.php`);
  }

  getEmpleado(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.URL}empleados/getEmpleado.php?Id_usuario=${id}`);
  }

  deleteEmpleado(id: number): Observable<Respuesta> {
    return this.http.get<Respuesta>(`${this.URL}empleados/deleteEmpleado.php?Id_usuario=${id}`);
  }

  logout(): void {
    this.CS.delete('client');
    this.CS.delete('nombre');
    this.CS.delete('access_token');
    this.CS.delete('id');
    this.CS.delete('cargo');
    this.CS.delete('sucursal');
    // tslint:disable-next-line: no-unused-expression
    this.enviado === true;
    this.router.navigate(['/']);
  }
}
