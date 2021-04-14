import { AdministradorService } from './../../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css'],
})
export class SucursalComponent implements OnInit {
  constructor(private AS: AdministradorService) {}

  ngOnInit(): void {}

}
