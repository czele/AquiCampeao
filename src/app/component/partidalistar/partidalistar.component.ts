import { Component, OnInit } from '@angular/core';
import { Clube } from 'src/app/model/clube.model';
import { Partida } from 'src/app/model/partida.model';

@Component({
  selector: 'app-partidalistar',
  templateUrl: './partidalistar.component.html',
  styleUrls: ['./partidalistar.component.css']
})
export class PartidalistarComponent implements OnInit {

  partidaList:Partida[] = [];

  constructor() { }

  ngOnInit(): void {

    this.partidaList.push(
      {id:1, mandante: 2, golsmandante: 5, golsvisitante:50, visitante:1, data:"não tem ainda"},
      {id:2, mandante: 1, golsmandante: 0, golsvisitante:0, visitante:2, data:"não tem ainda"},
    )
  }

}
