import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Clube } from 'src/app/model/clube.model';
import { ClubeService } from 'src/app/service/clube.service';
import { JogadorService } from 'src/app/service/jogador.service';

interface Posicoes {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {
  posicoes: Posicoes[] = [
    {value: 'Goleiro', viewValue: 'Goleiro'},
    {value: 'Zagueiro', viewValue: 'Zagueiro'},
    {value: 'Volante', viewValue: 'Volante'},
    {value: 'Lateral', viewValue: 'Lateral'},
    {value: 'Meio de Campo', viewValue: 'Meio de Campo'},
    {value: 'Atacante', viewValue: 'Atacante'},
  ];
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
    private _serviceclube:ClubeService,
    private _router:Router) { }

  ngOnInit(): void {
    this._serviceclube.listar().subscribe(result => this.clubes = result)
  }
  
  save(){
    console.log(this.form.value)
    this._service.inserir(this.form.value)
    .subscribe(response=>{console.log(response)
      this._router.navigateByUrl('/jogadorlistar')})
  }

}
