import { AdministradorService } from './../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css'],
})
export class ReporteComponent implements OnInit {
  constructor(private AS: AdministradorService) {}

  ngOnInit(): void {}

  salir(): void {
    this.AS.logout();
  }

}
