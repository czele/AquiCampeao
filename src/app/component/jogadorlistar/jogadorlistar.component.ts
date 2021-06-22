import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Clube } from 'src/app/model/clube.model';
import { Jogador } from 'src/app/model/jogador.model';
import { ClubeService } from 'src/app/service/clube.service';
import { JogadorService } from 'src/app/service/jogador.service';

@Component({
  selector: 'app-jogadorlistar',
  templateUrl: './jogadorlistar.component.html',
  styleUrls: ['./jogadorlistar.component.css'],
})

export class JogadorlistarComponent implements OnInit {
// cria uma variável chamada jogadorList, declarada como lista
  jogadorList:Jogador[] = [];
  // clubeList:Clube[] = [];

//chamando a service do jogador
  constructor(private _service:JogadorService,
              private _router:Router,) {}
              // private _requsicaoclubes:ClubeService) { }
              

  ngOnInit(): void {
    this.load();
    // this._requsicaoclubes.listar().subscribe(result => this.clubeList = result);
   }

   load(){
    //chamada do método "listar" dentro da service do jogador
    //subscribe é a resposta recebida pelo get
    //este procedimento pega a responsta e atribui a lista jogadorList
    this._service.listar().subscribe(jogador => this.jogadorList = jogador)
   }

   delete (id:number){
    if(confirm("Você deseja realmente excluir este registro?" ))
    this._service.deletar(id).subscribe(result => this.load())
  }

  showEdit(jogador:Jogador){
    this._router.navigateByUrl(`/jogador/${jogador.id}`)
  }

}
