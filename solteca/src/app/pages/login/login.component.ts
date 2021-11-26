import { Observable } from 'rxjs';
import { Request } from 'src/app/models/auth/request';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from 'src/app/services/token.service';
import { Sucursal } from 'src/app/models/auth/sucursales';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = {
    user: '',
    pass: '',
    option: 0,
  };

  sucursal: any;

  constructor(
    private TS: TokenService,
    private CS: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const client = this.CS.get('client');
    if (client === 'Administrador') {
      this.router.navigate(['/menu']);
    } else {
      this.router.navigate(['/ventanilla']);
    }
    this.getSucursales();
  }

  loginUsuario(): void {
    // tslint:disable-next-line: deprecation
    this.TS.login(this.login).subscribe((datos: Request) => {
      if (datos.resultado === 'OK') {
        // alert(datos.mensaje);
        Swal.fire({
          icon: 'success',
          title: datos.mensaje,
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        // alert(datos.mensaje);
        Swal.fire({
          icon: 'error',
          title: datos.mensaje,
          showConfirmButton: false,
          timer: 1000,
        });
      }
      if (datos.access_token !== undefined) {
        this.CS.set('access_token', datos.access_token, 1, '/');
        this.CS.set('client', datos.client, 1, '/');
        this.CS.set('sucursal', datos.sucursal.toString(), 1, '/');
        this.CS.set('nombre', datos.nombre, 1, '/');
        this.CS.set('cargo', datos.cargo, 1, '/');
        this.CS.set('id', datos.id , 1, '/');
      }
      const cookie = this.CS.check('access_token');
      const client = this.CS.get('client');
      if (client === 'Administrador') {
        this.router.navigate(['/menu']);
      } else {
        this.router.navigate(['/recientes']);
      }
    });
  }

  getSucursales(): void{
    // tslint:disable-next-line: deprecation
    this.TS.sucursales().subscribe((data: Sucursal) => {
      this.sucursal = data;
      console.log(this.sucursal);
    });
  }

}
