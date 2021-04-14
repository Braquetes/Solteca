import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './admin/pages/menu/menu.component';
import { EmpleadosComponent } from './admin/pages/empleadosCRUD/empleados/empleados.component';
import { EstadisticasComponent } from './admin/pages/estadisticasMENU/estadisticas/estadisticas.component';
import { PreciosComponent } from './admin/pages/preciosCRUD/precios/precios.component';
import { SucursalComponent } from './admin/pages/sucursalCRUD/sucursal/sucursal.component';
import { FormEmpleadoComponent } from './admin/pages/empleadosCRUD/form-empleado/form-empleado.component';
import { FormSucursalComponent } from './admin/pages/sucursalCRUD/form-sucursal/form-sucursal.component';
import { FormPreciosComponent } from './admin/pages/preciosCRUD/form-precios/form-precios.component';
import { ReporteGeneralComponent } from './admin/pages/estadisticasMENU/reporte-general/reporte-general.component';
import { ReporteSucursalComponent } from './admin/pages/estadisticasMENU/reporte-sucursal/reporte-sucursal.component';
import { VentanillaComponent } from './vendedor/pages/ventanilla/ventanilla.component';
import { CarritoComponent } from './vendedor/pages/carrito/carrito.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { HeaderOpcionesComponent } from './components/admin/header/header-opciones/header-opciones.component';
import { HeaderVoidComponent } from './components/admin/header/header-void/header-void.component';
import { HeaderVentanillaComponent } from './components/vendedor/header/header-ventanilla/header-ventanilla.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LinkComponent } from './extras/link/link.component';
import { FooterComponent } from './extras/footer/footer.component';
import { ReporteComponent } from './vendedor/pages/reporte/reporte.component';
import { InfoComponent } from './vendedor/pages/info/info.component';
import { ProofComponent } from './pages/proof/proof.component';

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
    NoImagePipe,
    HeaderOpcionesComponent,
    HeaderVoidComponent,
    HeaderVentanillaComponent,
    LinkComponent,
    FooterComponent,
    ReporteComponent,
    InfoComponent,
    ProofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
