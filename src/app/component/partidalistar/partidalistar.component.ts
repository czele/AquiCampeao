import { Component, OnInit } from '@angular/core';
import { Partida } from 'src/app/model/partida.model';
import { PartidaService } from 'src/app/service/partida.service';

@Component({
  selector: 'app-partidalistar',
  templateUrl: './partidalistar.component.html',
  styleUrls: ['./partidalistar.component.css']
})
export class PartidalistarComponent implements OnInit {

  partidaList:Partida[] = [];

  constructor(private _service:PartidaService) { }

  ngOnInit(): void {

    this._service.listar().subscribe(partida=>this.partidaList = partida)
    
  }

}
