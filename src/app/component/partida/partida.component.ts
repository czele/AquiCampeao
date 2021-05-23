import { Component, OnInit } from '@angular/core';
import { PartidaService } from 'src/app/service/partida.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})

export class PartidaComponent implements OnInit {


  form = this.formBuilder.group({
    mandante: "",
    golsmandante: "",
    golsvisitante: "",
    visitante: "",
    data: "",
  })
  constructor(private formBuilder: FormBuilder,
    private _service: PartidaService) { }

  ngOnInit(): void {
  }
  save() {
    console.log(this.form.value)
    this._service.inserir(this.form.value).subscribe(response => console.log(response))
  }
}
