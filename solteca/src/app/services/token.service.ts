import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/auth/login';
import { Request } from 'src/app/models/auth/request';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  URL = 'https://solteca.ml/API-solteca/';

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<Request>{
  // let direccion = this.URL + 'auth.php';
  // return this.http.post<Request>(direccion,login);
  return this.http.post<Request>(`${this.URL}login.php`, JSON.stringify(login));
  }

  }
