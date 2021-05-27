import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Clube } from 'src/app/model/clube.model';
import { ClubeService } from 'src/app/service/clube.service';
import { JogadorService } from 'src/app/service/jogador.service';


@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {
  
  clubes:Clube[] = [];

  form= this.formBuilder.group({
    nome:"",
    idClube:"",
    camisa:"",
    posicao:"",
    peBom:"",

  })
  constructor(private formBuilder:FormBuilder,
    private _service:JogadorService,
    private _serviceclube: ClubeService) { }

  ngOnInit(): void {
    this._serviceclube.listar().subscribe(result => this.clubes = result)
  }
  
  save(){
    console.log(this.form.value)
    this._service.inserir(this.form.value).subscribe(response=>console.log(response))
  }

}
