import { AdministradorService } from './../../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent implements OnInit {
  constructor(private AS: AdministradorService) {}

  ngOnInit(): void {}

  salir(): void {
    this.AS.logout();
  }

}
