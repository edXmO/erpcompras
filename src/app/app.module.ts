import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './nav/nav.component';
import { ListadoProveedoresComponent } from './proveedores/listado-proveedores/listado-proveedores.component';
import { CrearProveedorComponent } from './proveedores/crear-proveedor/crear-proveedor.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { ModalComponent } from './modal/modal.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    ListadoProveedoresComponent,
    CrearProveedorComponent,
    ListadoProductosComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    ModalComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
