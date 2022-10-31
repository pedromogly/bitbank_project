import { Component } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: [
    './transferencia.component.css',
    './transferencia.component.scss',
  ],
})
export class TransferenciaComponent {

  valor: number = 11111;
  conta: number = 111;

  enviar() {
    console.log('Transferiu Macaco');
    console.log('Valor enviado: ', this.valor);
    console.log('Conta bancaria: ', this.conta);
  }
}
