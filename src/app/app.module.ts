import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DetailsComponent } from './components/details/details.component';
import { RoutingModule } from './routing/routing.module';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    DetailsComponent,
    AgregarProductoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
