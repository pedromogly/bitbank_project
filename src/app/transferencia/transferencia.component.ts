import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: [
    './transferencia.component.css',
    './transferencia.component.scss',
  ],
})
export class TransferenciaComponent {

  @Output() aoEnviar = new EventEmitter<any>();

  valor: number = 11111;
  conta: number = 111;

  enviar() {
    console.log('Transferiu Macaco');
    //console.log('Valor enviado: ', this.valor);
    //console.log('Conta bancaria: ', this.conta);
    
    //passar valor no Output aoEnviar diretamente
    //this.aoEnviar.emit({valor: this.valor, conta: this.conta});

    //passar valor no Output aoEnviar usando uma variavel valorEmitir
    const valorEmitir = { valor: this.valor, conta: this.conta };
    this.aoEnviar.emit(valorEmitir);
  }
}
