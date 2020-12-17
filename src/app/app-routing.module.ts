import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';
import { ListadoProveedoresComponent } from './proveedores/listado-proveedores/listado-proveedores.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'listado-proveedores', component: ListadoProveedoresComponent},
  {path: 'listado-productos', component: ListadoProductosComponent},
  {path: 'crear-producto', component: CrearProductoComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
