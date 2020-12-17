import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

    endPointProducto: string = 'http://localhost:8080/producto';

    constructor(private httpClient: HttpClient) { }

    getProductos() {
      return this.httpClient.get(this.endPointProducto)
                            .pipe(
                              map((res: any) => {
                                return res
                              })
                            )
    }

    postProducto(producto: object) {
      return this.httpClient.post(this.endPointProducto, producto)
                            .pipe(
                              map((res: any) => {
                                return res
                              })
                            )
    }


}
