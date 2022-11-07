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
  digitoInsuficiente: string;


  enviar() {
    console.log('Transferencia Solicitada');
    this.erroNumerico = 'Digite os Valores Corretamente';
    this.digitoInsuficiente = 'Digito de Conta Insuficiente';
    //código que gera erro ao inserir dados errados.
    console.log('Validando valores...');
    if (this.ehValido() && this.digitoSuficiente()) {
        this.erroNumerico = 'Sucesso! Reproduzindo Extrato';
        this.valoresComErro.emit(this.erroNumerico);
        const valorEmitir = { valor: this.valor, conta: this.conta, tipo: this.tipo };
        this.aoEnviar.emit(valorEmitir);
        this.limparTransferencia();
        this.limparErros();
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
      console.log('Valor Inválido');
      this.valoresComErro.emit({erroNumerico: this.erroNumerico});
    }

    return valido;
  }
  
  private digitoSuficiente() {
    const digito = this.conta > 999;
    if (!digito) {
      console.log('Digito de Conta Insuficiente');
      this.valoresComErro.emit({digitoInsuficiente: this.digitoInsuficiente});
    }

    return digito
  }



  limparTransferencia() {
    this.valor = 0;
    this.conta = 0;
    //this.tipo = '0';
  }

  limparErros() {
    this.erroNumerico = 'Digite os Valores Corretamente';
    this.digitoInsuficiente = 'Digito de Conta Insuficiente';
  }








}
