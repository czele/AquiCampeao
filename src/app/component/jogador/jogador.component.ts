import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { JogadorService } from 'src/app/service/jogador.service';

interface Jogadordrop {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {
  
  jogadordrop:Jogadordrop[] = [
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
  constructor(private formBuilder:FormBuilder,
    private _service:JogadorService) { }

  ngOnInit(): void {
  }
  
  save(){
    console.log(this.form.value)
    this._service.inserir(this.form.value).subscribe(response=>console.log(response))
  }

}
