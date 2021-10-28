import { PuedeDesactivar } from './../../../../guards/forms.guard';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdministradorService } from 'src/app/services/administrador.service';
import { Respuesta } from 'src/app/models/admin/response';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css'],
})
export class FormEmpleadoComponent implements OnInit, PuedeDesactivar {
  enviado = false;
  empleados = {
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
  };
  ruta = 'empleados';
  constructor(private AS: AdministradorService) {}

  enviar(): void{
    if (
      this.empleados.Nombre !== '' &&
      this.empleados.Apellido_paterno !== '' &&
      this.empleados.Apellido_materno !== '' &&
      this.empleados.Sexo !== '' &&
      this.empleados.Usuario !== '' &&
      this.empleados.Pass !== '' &&
      this.empleados.Cargo !== '' &&
      this.empleados.Id_sucursal !== '' &&
      this.empleados.Telefono !== ''
    ) {
      console.log(JSON.stringify(this.empleados));
      this.AS.addEmpleado(this.empleados).subscribe((datos: Respuesta) => {
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
      });
      this.enviado = true;
    }
}

  permitirSalirDeRuta(): | boolean | import('rxjs').Observable<boolean> | Promise<boolean> {
    if (this.empleados.Nombre !== '' && this.enviado === true) {
      return true;
    }

    const confirmacion = window.confirm(
      '¿Quieres salir del formulario y perder los cambios realizados?'
    );
    return confirmacion;
  }

  ngOnInit(): void {}

}
