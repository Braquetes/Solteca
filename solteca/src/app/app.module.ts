import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './admin/pages/menu/menu.component';
import { EmpleadosComponent } from './admin/pages/empleados/empleados.component';
import { EstadisticasComponent } from './admin/pages/estadisticas/estadisticas.component';
import { PreciosComponent } from './admin/pages/precios/precios.component';
import { SucursalComponent } from './admin/pages/sucursal/sucursal.component';
import { FormEmpleadoComponent } from './admin/pages/empleadosCRUD/form-empleado/form-empleado.component';
import { FormSucursalComponent } from './admin/pages/sucursalCRUD/form-sucursal/form-sucursal.component';
import { FormPreciosComponent } from './admin/pages/preciosCRUD/form-precios/form-precios.component';
import { ReporteGeneralComponent } from './admin/pages/estadisticasMENU/reporte-general/reporte-general.component';
import { ReporteSucursalComponent } from './admin/pages/estadisticasMENU/reporte-sucursal/reporte-sucursal.component';
import { VentanillaComponent } from './vendedor/pages/ventanilla/ventanilla.component';
import { CarritoComponent } from './vendedor/pages/carrito/carrito.component';
import { NoImagePipe } from './pipes/no-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    EmpleadosComponent,
    EstadisticasComponent,
    PreciosComponent,
    SucursalComponent,
    FormEmpleadoComponent,
    FormSucursalComponent,
    FormPreciosComponent,
    ReporteGeneralComponent,
    ReporteSucursalComponent,
    VentanillaComponent,
    CarritoComponent,
    NoImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
