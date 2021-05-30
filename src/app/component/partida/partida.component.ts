import { Component, OnInit } from '@angular/core';
import { PartidaService } from 'src/app/service/partida.service';
import { FormBuilder } from '@angular/forms';
import { ClubeService } from 'src/app/service/clube.service';
import { Clube } from 'src/app/model/clube.model';
import { Router } from '@angular/router';
import { Partida } from 'src/app/model/partida.model';
import * as moment from 'moment';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})

export class PartidaComponent implements OnInit {

  clubes: Clube[] = [];
  error:boolean=false;
  errormsg:string="";

  form = this.formBuilder.group({
    idMandante: "",
    golsMandante: "",
    golsVisitante: "",
    idVisitante: "",
    data: "",
  })

  constructor(private formBuilder: FormBuilder,
    private _service: PartidaService,
    private _serviceclube: ClubeService,
    private _router:Router) { }
        
  ngOnInit(): void {
    this._serviceclube.listar().subscribe(result => this.clubes = result)
  }
  

  save() {
    let dateString = this.form.get('data')?.value;
    let momentVariable = moment(dateString, 'DD/MM/YYYY');
    let stringvalue = momentVariable.format('yyyy-MM-DDThh:mm:ss.SSS');

    var xatuba:Partida = {
      id: 0,
      idMandante: this.form.get('idMandante')?.value,
      golsMandante: parseInt(this.form.get('golsMandante')?.value),
      golsVisitante: parseInt(this.form.get('golsVisitante')?.value),
      idVisitante: this.form.get('idVisitante')?.value,
      data: stringvalue,
    }

    console.log(xatuba)

    console.log(this.form.value)
    this._service.inserir(this.form.value).subscribe
    (response => {console.log(response)
    this._router.navigateByUrl('/partidalistar')},
    e=>{
      this.error=true
      this.errormsg=e.error.mensagem
    }
    )}
}
