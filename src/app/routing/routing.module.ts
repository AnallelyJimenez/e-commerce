import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from '../components/orders/orders.component';
import { AgregarProductoComponent } from '../components/agregar-producto/agregar-producto.component';
import { DetailsComponent } from '../components/details/details.component';

const routes: Routes = [
  { path: 'orden', component: OrdersComponent },
  { path: 'agregar/:id', component: AgregarProductoComponent },
  { path: 'orden-detalles/:id', component: DetailsComponent },
  { path: '', redirectTo: '/orden', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
