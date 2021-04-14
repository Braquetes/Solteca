import { Component, OnInit } from '@angular/core';
import { PuedeDesactivar } from 'src/app/guards/forms.guard';

@Component({
  selector: 'app-form-sucursal',
  templateUrl: './form-sucursal.component.html',
  styleUrls: ['./form-sucursal.component.css'],
})
export class FormSucursalComponent implements OnInit, PuedeDesactivar {
  enviado = false;
  empleados = {
    mensaje: '',
  };
  constructor() {}

  enviar(): void {
    alert('mensaje enviado: ' + this.empleados.mensaje);
    this.enviado = true;
  }

  permitirSalirDeRuta():
    | boolean
    | import('rxjs').Observable<boolean>
    | Promise<boolean> {
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
