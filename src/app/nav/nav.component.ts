import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MensajesService } from '../servicios/mensajes.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  subscripMensaje: Subscription;
  texto: string = '';
  tipoMensaje: string = '';
  showMensaje: boolean = false;


  constructor(private mensajesService: MensajesService) { }

  ngOnInit(): void {
    this.subscripMensaje = this.mensajesService.isMensajeIn
                                               .subscribe(
                                                 (data: any) => {
                                                   this.showMensaje = true;
                                                   this.texto = data.texto;
                                                   this.tipoMensaje = data.tipoMensaje;
                                                   setTimeout(() => {
                                                    this.showMensaje = false;
                                                   }, 4000)
                                                 }
                                                )
  }

}
