import { Router } from '@angular/router';
import { AdministradorService } from './../../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/models/admin/response';
import { Sucursal } from 'src/app/models/auth/sucursales';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  constructor(
    private AS: AdministradorService,
    private TS: TokenService,
    private router: Router
  ) {}
  sucursal: any;
  empleados = [
    {
      Id_usuario: 0,
      Nombre: '',
      Apellido_paterno: '',
      Apellido_materno: '',
      Sexo: '',
      Usuario: '',
      Pass: '',
      Cargo: '',
      Id_sucursal: '',
      Telefono: '',
    },
  ];

  empleado: any;

  ngOnInit(): void {
    this.getEmpledos();
    this.getSucursales();
  }

  getEmpledos(): void {
    this.AS.getEmpleados().subscribe((data: Respuesta) => {
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

  getSucursales(): void {
    // tslint:disable-next-line: deprecation
    this.TS.sucursales().subscribe((data: Sucursal) => {
      this.sucursal = data;
      console.log(this.sucursal);
    });
  }

  editar(id: number): void {
    this.router.navigate(['/empleados/form/', id]);
  }

  eliminar(id: number): void {
    this.AS.deleteEmpleado(id).subscribe((datos: Respuesta) => {
      if (datos.resultado === 'OK') {
        Swal.fire({
          icon: 'info',
          title: datos.mensaje,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        // alert(datos.mensaje);
        Swal.fire({
          icon: 'info',
          title: datos.mensaje,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      this.getEmpledos();
    });
  }

  salir(): void {
    this.AS.logout();
  }
}
