import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {
  
  foods:Food[] = [
    {value: 'Bahia', viewValue: 'Bahia'},
    {value: 'Biriguense', viewValue: 'Biriguense'},
    {value: 'Novo Horizontino', viewValue: 'Novo Horizontino'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
