import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {

  productos: any = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProductos()
                         .subscribe(
                           (res: any) => {
                             console.log(res);
                             this.productos = res.productos;
                           }, 
                           (err: any) => {
                             console.log(err)
                           }
                          )
  }

}
