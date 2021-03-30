import { AdministradorService } from './../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  constructor(private AS: AdministradorService) {}

  ngOnInit(): void {}

  salir(): void {
    this.AS.logout();
  }

}
