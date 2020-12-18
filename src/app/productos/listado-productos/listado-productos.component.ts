import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  formSearch: any;
  consultando: boolean = false;

  @ViewChild('search', {static: false}) searchRef: ElementRef;

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.formSearch = new FormGroup({
      search: new FormControl('')
    })
    // this.loadProductos();
    this.onSearch();
  }

  onSearch() {
    this.formSearch.get('search').valueChanges
                                  .subscribe(
                                    (data: any) => {
                                      if (data.length > 0) {
                                        this.consultando = true;
                                        this.productosService.getSearchProducto(data)
                                                             .subscribe(
                                                               (res: any) => {
                                                                  this.consultando = false;
                                                                  this.productos = res.productos;
                                                               },
                                                               (err: any) => {
                                                                  this.consultando = false;
                                                                  console.log(err)
                                                               }
                                                             )
                                      } else {
                                        this.productos = [];
                                      }
                                    }
                                  )
  }

  showForm() {
    this.searchRef.nativeElement.classList.toggle('open');
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
