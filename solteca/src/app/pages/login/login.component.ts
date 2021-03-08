import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../assets/css/estilos.css']
})
export class LoginComponent implements OnInit {

  login = {
    user: '',
    pass: ''
  };

  constructor(private TS: TokenService) { }

  ngOnInit(): void {
  }

  loginUsuario(){
    console.log(this.login);
    console.log(JSON.stringify(this.login));
    this.TS.log(this.login).subscribe((datos: any) => {
        if (datos['resultado'] === 'OK') {
          alert(datos['mensaje']);
        } else {
          alert(datos['mensaje']);
        }
      }
    );
  }

}
