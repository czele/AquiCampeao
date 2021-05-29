import { Component, OnInit } from '@angular/core';
import { PartidaService } from 'src/app/service/partida.service';
import { FormBuilder } from '@angular/forms';
import { ClubeService } from 'src/app/service/clube.service';
import { Clube } from 'src/app/model/clube.model';




@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})

export class PartidaComponent implements OnInit {

  clubes:Clube[] = [];

  form = this.formBuilder.group({
    idMandante: "",
    golsMandante: "",
    golsVisitante: "",
    idVisitante: "",
    data: "",
  })
  constructor(private formBuilder: FormBuilder,
    private _service: PartidaService,
    private _serviceclube: ClubeService) { }
  ngOnInit(): void {
    this._serviceclube.listar().subscribe(result => this.clubes = result)
  }
  save() {
    console.log(this.form.value)
    this._service.inserir(this.form.value).subscribe(response => console.log(response))
  }
}
