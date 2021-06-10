import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubeService } from 'src/app/service/clube.service';
import { Clube } from 'src/app/model/clube.model';

@Component({
  selector: 'app-clube',
  templateUrl: './clube.component.html',
  styleUrls: ['./clube.component.css']
})
export class ClubeComponent implements OnInit {

  error: boolean = false;
  errormsg: string = "";
  id: number = 0;

  form = this.formBuilder.group({
    nome: "",
    cidade: "",
    nomeEstadio: "",
    anoFundacao: "",
  })
  constructor(private formBuilder: FormBuilder,
    private _service: ClubeService,
    private _router: Router,
    private _route: ActivatedRoute) { }
    /*a injeção de dependência substitui o seguinte: var _service = new ClubeService(); 
    Para que a dependência possa ser injetada a classe deve estar declarada na lista de provider no app.module ou no próprio component
    Um detalhe é que no angular a injeção de dependências é sempre feita em um método construtor, em outras linguagem pode haver outros métodos
    */

  ngOnInit(): void {
    const param = this._route.snapshot.paramMap;
    this.id = Number(param.get('id'))
    console.log(this.id)
    if (this.id)
      this._service.obter(this.id)
        .subscribe(Clube => {
          this.form.get('nome')?.setValue(Clube.nome)
          this.form.get('cidade')?.setValue(Clube.cidade)
          this.form.get('nomeEstadio')?.setValue(Clube.nomeEstadio)
          this.form.get('anoFundacao')?.setValue(Clube.anoFundacao)

        })
  }

  save() {

    var clubeform: Clube = this.form.value
    clubeform.id = this.id

    if (this.id == 0)
      
      this._service.inserir(this.form.value)
        .subscribe(response => {
        console.log(response)
        this._router.navigateByUrl('/clubelistar')
      }, e => {
        this.error = true
        this.errormsg = e.error.mensagem
      })    
    else {
      console.log(this.form.value)
      this._service.atualizar(this.form.value)
        .subscribe(response => {
          console.log(response)
          this._router.navigateByUrl('/clubelistar')
        }, e => {
          this.error = true
          this.errormsg = e.error.mensagem
        })
    }
  }

}
