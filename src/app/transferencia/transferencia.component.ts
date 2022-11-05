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
  @Output() valoresComErro = new EventEmitter<any>(); //eu poderia colocar <any> aqui também


  valor: number;
  conta: number;
  tipo: string;
  erroNumerico: string;


  enviar() {
    console.log('Transferencia Solicitada');
    
    //código que gera erro ao inserir dados errados.
    console.log('Validando valores...')
    if (this.ehValido()) {
        const valorEmitir = { valor: this.valor, conta: this.conta, tipo: this.tipo };
        this.aoEnviar.emit(valorEmitir);
        this.limparTransferencia();
    }

    //console.log('Valor enviado: ', this.valor);
    //console.log('Conta bancaria: ', this.conta);
    
    //passar valor no Output aoEnviar diretamente
    //this.aoEnviar.emit({valor: this.valor, conta: this.conta});

    //passar valor no Output aoEnviar usando uma variavel valorEmitir

  }

  //Desenvolvendo um código que gera erro ao inserir dados corretos.
  private ehValido() {
    const valido = this.valor > 0;
    if (!valido) {
      this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;
  }



  limparTransferencia() {
    this.valor = 0;
    this.conta = 0;
    this.tipo = '0';
  }


  

  



}
