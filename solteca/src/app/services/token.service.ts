import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/auth/login';
import { Request } from 'src/app/models/auth/request';
import { Observable} from 'rxjs';
import { Sucursal } from '../models/auth/sucursales';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  URL = 'http://braquetes.mx/API-solteca/';

  constructor(private http: HttpClient) {}

  login(login: Login): Observable<Request> {
    return this.http.post<Request>(
      `${this.URL}login.php`,
      JSON.stringify(login)
    );
  }

  sucursales(): Observable<Sucursal> {
    return this.http.get<Sucursal>(`${this.URL}sucursales.php`);
  }

}
