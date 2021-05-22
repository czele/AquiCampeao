import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  form= this.formBuilder.group({
    nome:"",
    clube:"",
    camisa:"",
    posicao:"",
    pebom:"",

  })
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}
