import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/model/jogador.model';


@Component({
  selector: 'app-jogadorlistar',
  templateUrl: './jogadorlistar.component.html',
  styleUrls: ['./jogadorlistar.component.css'],
})

export class JogadorlistarComponent implements OnInit {

  jogadorList:Jogador[] = [];

  constructor() { }

  ngOnInit(): void {

    this.jogadorList.push(
      {id:1, nome:"Danilo", clube: "Bahia", camisa:50, posicao: "Atacante", pebom:"Nenhum"},
      {id:2, nome:"Fábio", clube: "Biriguense", camisa:99, posicao: "Zaga", pebom:"Esquerdo"},
    )
  }

}
