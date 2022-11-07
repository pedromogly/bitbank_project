import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-erros',
  templateUrl: './erros.component.html',
  styleUrls: ['./erros.component.css']
})
export class ErrosComponent implements OnInit {
  @Input() erroRequisitado: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
