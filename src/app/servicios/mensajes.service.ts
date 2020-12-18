import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private mensajeIn = new BehaviorSubject<any>({});

  get isMensajeIn() {
    return this.mensajeIn.asObservable();
  }

  constructor() {}

  setMensaje(texto: string, tipoMensaje: string) {
    this.mensajeIn.next({
      texto: texto,
      tipoMensaje: tipoMensaje
    })
  }


}
