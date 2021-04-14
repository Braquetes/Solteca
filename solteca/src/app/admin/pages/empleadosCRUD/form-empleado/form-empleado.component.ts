import { PuedeDesactivar } from './../../../../guards/forms.guard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css'],
})
export class FormEmpleadoComponent implements OnInit, PuedeDesactivar {
  enviado = false;
  empleados = {
    mensaje: ''
  };
  ruta = 'empleados';
  constructor() {}

  enviar(): void{
    alert('mensaje enviado: ' + this.empleados.mensaje);
    this.enviado = true;
  }

  permitirSalirDeRuta(): | boolean | import('rxjs').Observable<boolean> | Promise<boolean> {
    if (this.empleados.mensaje !== '' && this.enviado === true) {
      return true;
    }

    const confirmacion = window.confirm(
      '¿Quieres salir del formulario y perder los cambios realizados?'
    );
    return confirmacion;
  }

  ngOnInit(): void {}

}
