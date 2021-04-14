import { AdministradorService } from './../../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-opciones',
  templateUrl: './header-opciones.component.html',
  styleUrls: ['./header-opciones.component.css'],
})
export class HeaderOpcionesComponent implements OnInit {
  constructor(private AS: AdministradorService) {}

  ngOnInit(): void {}

  salir(): void {
    this.AS.logout();
  }

}
