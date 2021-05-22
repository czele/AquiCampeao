import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/model/jogador.model';
import { JogadorService } from 'src/app/service/jogador.service';


@Component({
  selector: 'app-jogadorlistar',
  templateUrl: './jogadorlistar.component.html',
  styleUrls: ['./jogadorlistar.component.css'],
})

export class JogadorlistarComponent implements OnInit {

  jogadorList:Jogador[] = [];

  constructor(private _service:JogadorService) { }

  ngOnInit(): void {
    this._service.listar().subscribe(jogador => this.jogadorList = jogador)
   }

}
