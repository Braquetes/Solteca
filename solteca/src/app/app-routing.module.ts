import { ReporteSucursalComponent } from './admin/pages/estadisticasMENU/reporte-sucursal/reporte-sucursal.component';
import { ReporteGeneralComponent } from './admin/pages/estadisticasMENU/reporte-general/reporte-general.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './admin/pages/empleadosCRUD/empleados/empleados.component';
import { FormEmpleadoComponent } from './admin/pages/empleadosCRUD/form-empleado/form-empleado.component';
import { EstadisticasComponent } from './admin/pages/estadisticasMENU/estadisticas/estadisticas.component';
import { MenuComponent } from './admin/pages/menu/menu.component';
import { PreciosComponent } from './admin/pages/preciosCRUD/precios/precios.component';
import { FormSucursalComponent } from './admin/pages/sucursalCRUD/form-sucursal/form-sucursal.component';
import { SucursalComponent } from './admin/pages/sucursalCRUD/sucursal/sucursal.component';
import { VigilanteGuard } from './guards/vigilante.guard';
import { LoginComponent } from './pages/login/login.component';
import { CarritoComponent } from './vendedor/pages/carrito/carrito.component';
import { VentanillaComponent } from './vendedor/pages/ventanilla/ventanilla.component';
import { FormPreciosComponent } from './admin/pages/preciosCRUD/form-precios/form-precios.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ventanilla',
    component: VentanillaComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'sucursal',
    component: SucursalComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'sucursal/form',
    component: FormSucursalComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'sucursal/reporte-general',
    component: ReporteGeneralComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'sucursal/reporte-sucursal',
    component: ReporteSucursalComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'menu',
    component:  MenuComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'empleados',
    component: EmpleadosComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'empleados/form',
    component: FormEmpleadoComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'estadisticas',
    component: EstadisticasComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'precios',
    component: PreciosComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'precios/form',
    component: FormPreciosComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
