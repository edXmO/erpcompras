import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {

  productos: any = [];
  showModal: boolean = false;
  _id: string = '';

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos() {
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

  removeProducto(_id: string) {
    this.productosService.deleteProducto(_id)
                        .subscribe(
                          (res: any) => {
                            this.loadProductos();
                          }, 
                          (err: any) => {
                            console.log(err)
                          }
                        )

  }

  toggleModal(param?: any) {
    if(param){
      this._id = param;
    }
    this.showModal = !this.showModal;
  }

  getAccion(event: any) {
    if(event.confirm) {
      this.removeProducto(this._id);
      this.toggleModal();
    } else {
      this.toggleModal();
    }
  }

}
