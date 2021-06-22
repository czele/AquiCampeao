import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clube } from 'src/app/model/clube.model';
import { Jogador } from 'src/app/model/jogador.model';
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
  error:boolean=false;
  errormsg:string = "";
  id:number = 0;

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
    private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    const param = this._route.snapshot.paramMap;
    this.id = Number(param.get('id'))
    this._service.obter(this.id).subscribe(jogador => {
      this.form.get('nome')?.setValue(jogador.nome);
      this.form.get('idClube')?.setValue(jogador.idClube)
      this.form.get('camisa')?.setValue(jogador.camisa)
      this.form.get('posicao')?.setValue(jogador.posicao)
      this.form.get('peBom')?.setValue(jogador.peBom)
    })
    this._serviceclube.listar().subscribe(result => this.clubes = result)
  }
  
  save(){

    var jogador:Jogador = this.form.value
    jogador.id = this.id

    if (this.id == 0)
       this._service.inserir(jogador).subscribe(response=>{console.log(response)
      this._router.navigateByUrl('/jogadorlistar')},e=> 
      {this.error=true
      this.errormsg=e.error.mensagem})
    else 
      this._service.atualizar(jogador).subscribe(response=>{console.log(response)
      this._router.navigateByUrl('/jogadorlistar')},e=> 
      {this.error=true
      this.errormsg=e.error.mensagem})
  }
}
