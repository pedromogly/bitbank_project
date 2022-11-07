import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bitbank';

  //Primeira forma de fazer, menos prática
  //  valor: number;
  //  conta: number;
  //  tipo: string;

  //Segunda forma, armazenando em uma variavel local
  transferencias: any[] = []; //tem que inicializar o array de transferencias
  erros: any[] = []; //tem que inicializar o objeto de erro


  enviar($event) {
    console.log($event);
  //  this.valor = $event.valor;
  //  this.conta = $event.conta;
  //  this.tipo = $event.tipo;

    // variavel transferencia recebe o evento (que se
    //aplica a todos os eventos vindo do parametro do metodo enviar())
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia);
  }

  exibirModalErro($event) {
    console.log($event);
    this.erros = $event;
  }


}

