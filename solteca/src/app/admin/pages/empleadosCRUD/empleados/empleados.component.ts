import { AdministradorService } from './../../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/models/admin/response';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  constructor(private AS: AdministradorService) {}

  empleados = [{
    Id_usuario: 0,
    Nombre: '',
    Apellido_paterno: '',
    Apellido_materno: '',
    Sexo: '',
    Usuario: '',
    Pass: '',
    Cargo: '',
    Id_sucursal: '',
    Telefono: ''
  }];

  empleado: any;

  ngOnInit(): void {
    this.getEmpledos();
  }

  getEmpledos(): void{
    this.AS.getEmpleado().subscribe((data: Respuesta) => {
      this.empleado = data;
      for (const val of this.empleado) {
        this.empleados.push(val);
        console.log(this.empleados);
        console.log(this.empleados.length);
      }
    });
    // tslint:disable-next-line: only-arrow-functions tslint:disable-next-line: typedef space-before-function-paren
    this.empleados.sort(function (a, b) {
      if (a.Id_usuario > b.Id_usuario) {
        return 1;
      }
      if (a.Id_usuario < b.Id_usuario) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    while (this.empleados.length > 0) {
      this.empleados.pop();
    }
    console.log(this.empleados);
  }

  salir(): void {
    this.AS.logout();
  }
}
