import { PuedeDesactivar } from 'src/app/guards/forms.guard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-precios',
  templateUrl: './form-precios.component.html',
  styleUrls: ['./form-precios.component.css'],
})
export class FormPreciosComponent implements OnInit, PuedeDesactivar {
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
