import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  formProducto: any = {};
  validacion: boolean = false;
  enviando: boolean = false;

  constructor(private productosService: ProductosService, 
              private router: Router,
              private mensajesService: MensajesService) { }

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
    this.enviando = true;
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
                              this.mensajesService.setMensaje(res.message, 'success');
                              this.enviando = false; // no haría falta porque navegamos
                              this.router.navigate(['/listado-productos']);
                            },
                            (err: any) => {
                              this.enviando = false;
                              this.mensajesService.setMensaje(err.error.message, 'danger');
                            }
                          )
  }

  showValidacion() {
    this.validacion = true;
  }

}
