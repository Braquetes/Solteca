import { AdministradorService } from './../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/app/services/vendedor.service';
import { Empleado } from 'src/app/models/admin/empleado';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  empleado: any;
  vendedor: any;
  cargo: any;
  constructor(private AS: AdministradorService, private VS: VendedorService, private CS: CookieService) {}

  ngOnInit(): void {
    this.empleados();
    this.getInfo();
  }

  empleados(): void {
    this.VS.empleados().subscribe((data: Empleado) => {
      this.empleado = data;
      console.log(this.empleado);
    });
  }

  getInfo(): void {
    this.vendedor = this.CS.get('nombre');
    this.cargo = this.CS.get('cargo');
  }

  salir(): void {
    this.AS.logout();
  }
}
