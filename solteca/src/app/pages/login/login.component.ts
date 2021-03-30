import { Observable } from 'rxjs';
import { Request } from 'src/app/models/auth/request';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = {
    user: '',
    pass: '',
    option: '1',
  };

  constructor(
    private TS: TokenService,
    private CS: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const client = this.CS.get('client');
    if (client === 'administrador') {
      this.router.navigate(['/menu']);
    } else {
      this.router.navigate(['/ventanilla']);
    }
  }

  loginUsuario(): void {
    // tslint:disable-next-line: deprecation
    this.TS.login(this.login).subscribe((datos: Request) => {
      if (datos.resultado === 'OK') {
        alert(datos.mensaje);
      } else {
        alert(datos.mensaje);
      }
      if (datos.access_token !== undefined) {
        this.CS.set('access_token', datos.access_token, 4, '/');
        this.CS.set('client', datos.client, 4, '/');
      }
      const cookie = this.CS.check('access_token');
      const client = this.CS.get('client');
      if (client === 'administrador') {
        this.router.navigate(['/menu']);
      } else {
        this.router.navigate(['/ventanilla']);
      }
    });
  }
}
