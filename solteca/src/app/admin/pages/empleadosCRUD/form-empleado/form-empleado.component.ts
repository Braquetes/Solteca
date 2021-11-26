import { TokenService } from 'src/app/services/token.service';
import { PuedeDesactivar } from './../../../../guards/forms.guard';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdministradorService } from 'src/app/services/administrador.service';
import { Respuesta } from 'src/app/models/admin/response';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/admin/empleado';
import { NgForm } from '@angular/forms';
import { Sucursal } from 'src/app/models/auth/sucursales';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css'],
})
export class FormEmpleadoComponent implements OnInit, PuedeDesactivar {
  enviado = false;
  empleados: Empleado | undefined;
  ruta = 'empleados';
  id: any;
  empleado = {
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
  };
  sucursal: any;
  constructor(private AS: AdministradorService, private AR: ActivatedRoute, private TS: TokenService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.AR.snapshot.params.id;
    if (this.id) {
      console.log('Editar');
      this.AS.getEmpleado(this.id).subscribe((datos: Empleado) => {
        this.empleado = datos;
        console.log(this.empleado);
      });
    }
    this.getSucursales();
  }

  getSucursales(): void {
    // tslint:disable-next-line: deprecation
    this.TS.sucursales().subscribe((data: Sucursal) => {
      this.sucursal = data;
      console.log(this.sucursal);
    });
  }

  enviar(form: NgForm): void {
    console.log(JSON.stringify(this.empleado));
    if (this.id) {
      console.log('Editar');
      this.AS.editEmpleado(this.empleado).subscribe((datos: Respuesta) => {
        if (datos.resultado === 'OK') {
          Swal.fire({
            icon: 'info',
            title: datos.mensaje,
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['/empleados']);
        } else {
          // alert(datos.mensaje);
          Swal.fire({
            icon: 'info',
            title: datos.mensaje,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      this.enviado = true;
    } else {
      console.log('Crear');
      this.AS.addEmpleado(this.empleado).subscribe((datos: Respuesta) => {
        if (datos.resultado === 'OK') {
          Swal.fire({
            icon: 'info',
            title: datos.mensaje,
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['/empleados']);
        } else {
          // alert(datos.mensaje);
          Swal.fire({
            icon: 'info',
            title: datos.mensaje,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      this.enviado = true;
    }
  }

  permitirSalirDeRuta():
    | boolean
    | import('rxjs').Observable<boolean>
    | Promise<boolean> {
    if (this.enviado === true) {
      return true;
    }

    const confirmacion = window.confirm(
      '¿Quieres salir del formulario y perder los cambios realizados?'
    );
    return confirmacion;
  }
}
