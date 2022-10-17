import { ProveedoresComponent } from './components/pages/proveedores/proveedores.component';
import { LoginComponent } from './components/login/login.component';
import { SolDetalleseditComponent } from './components/pages/solicitudes_detalle/sol-detallesedit/sol-detallesedit.component';
import { SolDetalleslistComponent } from './components/pages/solicitudes_detalle/sol-detalleslist/sol-detalleslist.component';
import { SolDetallesaddComponent } from './components/pages/solicitudes_detalle/sol-detallesadd/sol-detallesadd.component';
import { StocklistComponent } from './components/pages/stock/stocklist.component';
import { SolicitudesaddComponent } from './components/pages/solicitudes/solicitudesadd/solicitudesadd.component';
import { ArticulosaddComponent } from './components/pages/articulos/articulosadd/articulosadd.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { E404Component } from './components/e404/e404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloslistComponent } from './components/pages/articulos/articuloslist/articuloslist.component';
import { SolicitudeslistComponent } from './components/pages/solicitudes/solicitudeslist/solicitudeslist.component';
import { SolicitudeseditComponent } from './components/pages/solicitudes/solicitudesedit/solicitudesedit.component';
import { RecepcioneslistComponent } from './components/pages/recepciones/recepcioneslist/recepcioneslist.component';
import { RecepcionesaddComponent } from './components/pages/recepciones/recepcionesadd/recepcionesadd.component';
import { RecepcioneseditComponent } from './components/pages/recepciones/recepcionesedit/recepcionesedit.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'articulos/list', component: ArticuloslistComponent },
  { path: 'articulos/add', component: ArticulosaddComponent },
  { path: 'solicitudes/list', component: SolicitudeslistComponent },
  { path: 'solicitudes/add', component: SolicitudesaddComponent },
  { path: 'solicitudes/edit/:id', component: SolicitudeseditComponent },
  { path: 'solicitud_detalle/list/:id', component: SolDetalleslistComponent },
  { path: 'solicitud_detalle/add/:id', component: SolDetallesaddComponent },
  { path: 'solicitud_detalle/edit/:id', component: SolDetalleseditComponent },
  { path: 'recepcionesdetalle/list/:id', component: RecepcioneslistComponent },
  { path: 'recepciones/add', component: RecepcionesaddComponent },
  { path: 'recepciones/list', component: RecepcioneslistComponent },
  { path: 'recepciones/edit/:id', component: RecepcioneseditComponent },
  { path: 'stock', component: StocklistComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
