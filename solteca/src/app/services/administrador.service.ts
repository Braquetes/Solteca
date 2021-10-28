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

  getEmpleado(): Observable<Respuesta> {
    return this.http.get<Respuesta>(`${this.URL}empleados/empleados.php`);
  }

  logout(): void {
    this.CS.delete('client');
    this.CS.delete('nombre');
    this.CS.delete('access_token');
    this.router.navigate(['/']);
  }
}
