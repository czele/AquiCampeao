import { Component, OnInit } from '@angular/core';
import { Classificacao } from 'src/app/model/classificacaomodel';
import { ClassificacaoService } from 'src/app/service/classificacao.service';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css']
})
export class ClassificacaoComponent implements OnInit {

  classList: Classificacao[] = [];
  constructor(private _service:ClassificacaoService) { }

  ngOnInit(): void {
    this._service.listar().subscribe(classificacao=> this.classList = classificacao)
  }

}
