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


  valor: number;
  conta: number;
  tipo: string;


  enviar() {
    console.log('Transferiu Macaco');
    //console.log('Valor enviado: ', this.valor);
    //console.log('Conta bancaria: ', this.conta);
    
    //passar valor no Output aoEnviar diretamente
    //this.aoEnviar.emit({valor: this.valor, conta: this.conta});

    //passar valor no Output aoEnviar usando uma variavel valorEmitir
    const valorEmitir = { valor: this.valor, conta: this.conta, tipo: this.tipo };
    this.aoEnviar.emit(valorEmitir);
    this.limparTransferencia();
  }


  limparTransferencia() {
    this.valor = 0;
    this.conta = 0;
    this.tipo = '0';

  }
}
