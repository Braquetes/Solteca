import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VendedorService } from './../../../services/vendedor.service';
import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/services/administrador.service';
import Swal from 'sweetalert2';
import { Recientes } from 'src/app/models/vendedor/recientes';

@Component({
  selector: 'app-recientes',
  templateUrl: './recientes.component.html',
  styleUrls: ['./recientes.component.css'],
})
export class RecientesComponent implements OnInit {
  vendedor: any;
  cargo: any;
  recientes: any;
  reciente: any;
  recients = [
    {
      Fecha_salida: '',
      Hora_salida: '',
      Origen: '',
      Destino: '',
      Numero_autobus: 0,
      Status: 0,
    },
  ];
  constructor(
    private VS: VendedorService,
    private CS: CookieService,
    private router: Router,
    private AS: AdministradorService
  ) {}

  ngOnInit(): void {
    const cookie = this.CS.check('access_token');
    const client = this.CS.get('client');
    if (cookie) {
      if (client === 'Administrador') {
        this.router.navigate(['/menu']);
      }
    }
    this.getInfo();
    this.getRecientes();
  }

  getInfo(): void {
    this.vendedor = this.CS.get('nombre');
    this.cargo = this.CS.get('cargo');
  }

  getRecientes(): void {
    this.VS.recientes().subscribe((data: Recientes) => {
      this.recientes = data;
      this.reciente = this.recientes;
      for (const val of this.reciente) {
        if (val.Status === '0') {
          console.log('No jala');
        }
        if (val.Status === '1'){
          console.log('Si');
          this.recients.push(val);
        }
      }
      console.log(this.recients);
    });
  }

  seleccion(hora: any, fecha: any, origen: any, destino: any): void {
    localStorage.setItem('Origen', origen);
    localStorage.setItem('Destino', destino);
    localStorage.setItem('Fecha', fecha);
    localStorage.setItem('Hora', hora);
    this.CS.set('Data', 'reciente');
    this.router.navigate(['ventanilla']);
  }

  nueva(): void {
    localStorage.clear();
    this.router.navigate(['ventanilla']);
  }

  salir(): void {
    this.AS.logout();
  }
}
