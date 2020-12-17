import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

    constructor(private httpClient: HttpClient) { }

    getProductos() {
      return this.httpClient.get('http://localhost:8080/producto')
                            .pipe(
                              map((res: any) => {
                                return res
                              })
                            )
    }


}
