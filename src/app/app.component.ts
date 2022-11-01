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
  transferencia: any = {};


  enviar($event) {
    console.log($event);
  //  this.valor = $event.valor;
  //  this.conta = $event.conta;
  //  this.tipo = $event.tipo;

    // variavel transferencia recebe o evento (que se 
    //aplica a todos os eventos vindo do parametro do metodo enviar())
    this.transferencia = $event;
  }


}

