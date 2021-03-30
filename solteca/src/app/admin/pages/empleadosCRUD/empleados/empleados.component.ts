import { AdministradorService } from './../../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  constructor(private AS: AdministradorService) {}

  ngOnInit(): void {}

  salir(): void {
    this.AS.logout();
  }

}
