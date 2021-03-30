import { AdministradorService } from './../../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte-sucursal',
  templateUrl: './reporte-sucursal.component.html',
  styleUrls: ['./reporte-sucursal.component.css'],
})
export class ReporteSucursalComponent implements OnInit {
  constructor(private AS: AdministradorService) {}

  ngOnInit(): void {}

}
