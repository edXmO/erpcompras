import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() texto: string = '';
  @Output() accion: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  confirmAccion() {
    this.accion.emit({confirm: true})
  }

  discardAccion() {
    this.accion.emit({confirm: false})
  }

}
