import { AdministradorService } from './../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/app/services/vendedor.service';
import { Empleado } from 'src/app/models/admin/empleado';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  empleado: any;
  constructor(private AS: AdministradorService, private VS: VendedorService) {}

  ngOnInit(): void {
    this.empleados();
  }

  empleados(): void{
    this.VS.empleados().subscribe((data: Empleado) => {
      this.empleado = data;
      console.log(this.empleado);
    });
  }

  salir(): void {
    this.AS.logout();
  }

}
