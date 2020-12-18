import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';
import { ListadoProveedoresComponent } from './proveedores/listado-proveedores/listado-proveedores.component';
import { RolesGuard } from './roles.guard';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'listado-proveedores', component: ListadoProveedoresComponent},
  {path: 'listado-productos', component: ListadoProductosComponent},
  {path: 'crear-producto', component: CrearProductoComponent},
  {path: 'editar-producto/:_id', component: EditarProductoComponent, canActivate: [RolesGuard]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
