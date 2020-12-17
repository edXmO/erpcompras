import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  formProducto: any = {};
  validacion: boolean = false;

  constructor(private productosService: ProductosService, 
              private router: Router) { }

  ngOnInit(): void {
    this.formProducto = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      sku: new FormControl(''),
      descripcion: new FormControl(''),
      precio: new FormControl(null),
      proveedor: new FormControl('')
    })
  }

  sendProducto() {
     let producto: any = {
       nombre: this.formProducto.get('nombre').value,
       sku: this.formProducto.get('sku').value,
       descripcion: this.formProducto.get('descripcion').value,
       precio: this.formProducto.get('precio').value,
       proveedor: this.formProducto.get('proveedor').value,
     }
     this.productosService.postProducto(producto)
                          .subscribe(
                            (res: any) => {
                              this.router.navigate(['/listado-productos']);
                            },
                            (err: any) => {
                              console.log(err);
                            }
                          )
  }

  showValidacion() {
    this.validacion = true;
  }

}
