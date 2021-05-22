import { Component, OnInit } from '@angular/core';
import { Clube } from 'src/app/model/clube.model';

@Component({
  selector: 'app-clubelistar',
  templateUrl: './clubelistar.component.html',
  styleUrls: ['./clubelistar.component.css']
})
export class ClubelistarComponent implements OnInit {

  clubeList:Clube[] = [];

  constructor() { }

  ngOnInit(): void {
    this.clubeList.push(
      {id:1, nome:"Bahia FC", cidade: "Salvador", estadio:"Fonte Nova", anodefundacao:1931},
      {id:2, nome:"Novohorizontino", cidade: "Novo Horizonte", estadio:"Jorge Ismael de Biasi", anodefundacao:1950},
    )
   
  }

}
