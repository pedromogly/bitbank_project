import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css','./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  @Input() transferido: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
