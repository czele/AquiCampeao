import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubeService } from 'src/app/service/clube.service';

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

  ngOnInit(): void {
    const param = this._route.snapshot.paramMap;
    this.id = Number(param.get('id'))

    // this._service.obter(this.id)
    //   .subscribe(clube => {
    //     this.form.get('nome')?.setValue(clube.nome)
    //     this.form.get('cidade')?.setValue(clube.cidade)
    //     this.form.get('nomeEstadio')?.setValue(clube.nomeEstadio)
    //     this.form.get('anoFundacao')?.setValue(clube.anoFundacao)
    //   })
  }

  save() {

    if (this.id == 0)
      console.log(this.form.value)
    this._service.inserir(this.form.value)
      .subscribe(response => {
        console.log(response)
        this._router.navigateByUrl('/clubelistar')
      }, e => {
        this.error = true
        this.errormsg = e.error.mensagem
      })
    
  }

}
