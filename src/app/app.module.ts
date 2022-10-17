import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArticuloslistComponent } from './components/pages/articulos/articuloslist/articuloslist.component';
import { ArticulosaddComponent } from './components/pages/articulos/articulosadd/articulosadd.component';
import { E404Component } from './components/e404/e404.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SolicitudeslistComponent } from './components/pages/solicitudes/solicitudeslist/solicitudeslist.component';
import { SolicitudeseditComponent } from './components/pages/solicitudes/solicitudesedit/solicitudesedit.component';
import { SolicitudesaddComponent } from './components/pages/solicitudes/solicitudesadd/solicitudesadd.component';
import { RecepcioneslistComponent } from './components/pages/recepciones/recepcioneslist/recepcioneslist.component';
import { RecepcioneseditComponent } from './components/pages/recepciones/recepcionesedit/recepcionesedit.component';
import { RecepcionesaddComponent } from './components/pages/recepciones/recepcionesadd/recepcionesadd.component';
import { StocklistComponent } from './components/pages/stock/stocklist.component';
import { SolDetalleslistComponent } from './components/pages/solicitudes_detalle/sol-detalleslist/sol-detalleslist.component';
import { SolDetalleseditComponent } from './components/pages/solicitudes_detalle/sol-detallesedit/sol-detallesedit.component';
import { SolDetallesaddComponent } from './components/pages/solicitudes_detalle/sol-detallesadd/sol-detallesadd.component';
import { LoginComponent } from './components/login/login.component';
import { ProveedoresComponent } from './components/pages/proveedores/proveedores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ArticuloslistComponent,
    ArticulosaddComponent,
    E404Component,
    DashboardComponent,
    SolicitudeslistComponent,
    SolicitudeseditComponent,
    SolicitudesaddComponent,
    RecepcioneslistComponent,
    RecepcioneseditComponent,
    RecepcionesaddComponent,
    StocklistComponent,
    SolDetalleslistComponent,
    SolDetalleseditComponent,
    SolDetallesaddComponent,
    LoginComponent,
    ProveedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
