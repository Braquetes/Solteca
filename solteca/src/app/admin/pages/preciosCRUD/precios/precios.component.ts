import { AdministradorService } from './../../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css'],
})
export class PreciosComponent implements OnInit {
  constructor(private AS: AdministradorService) {}

  ngOnInit(): void {}

  salir(): void {
    this.AS.logout();
  }

}
