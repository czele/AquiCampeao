import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClubeService } from 'src/app/service/clube.service';

@Component({
  selector: 'app-clube',
  templateUrl: './clube.component.html',
  styleUrls: ['./clube.component.css']
})
export class ClubeComponent implements OnInit {

  error:boolean = false;
  errormsg:string = "";

  form=this.formBuilder.group({
    nome: "",
    cidade:"",
    nomeEstadio:"",
    anoFundacao:"", 
   })
  constructor(private formBuilder:FormBuilder,
    private _service:ClubeService,
    private _router:Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.form.value)
    this._service.inserir(this.form.value)
    .subscribe(response=>{console.log(response)
      this._router.navigateByUrl('/clubelistar')
    }, e => {
        this.error = true
        this.errormsg = e.error.mensagem
        //console.log(e.error.mensagem)
    })
  }

}
