import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clube } from 'src/app/model/clube.model';
import { ClubeService } from 'src/app/service/clube.service';

@Component({
  selector: 'app-clubelistar',
  templateUrl: './clubelistar.component.html',
  styleUrls: ['./clubelistar.component.css']
})
export class ClubelistarComponent implements OnInit {

  clubeList: Clube[] = [];

  constructor(private _service: ClubeService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.load()
  }

  load(){
    this._service.listar().subscribe(clube => this.clubeList = clube)
  }

  delete(id:number) {
    if (confirm("Deseja realmente excluir?"))
      this._service.deletar(id).subscribe(result=>{this.load()})
  }

}
// Tentamos colocar o Snack bar sem sucesso
// this.openSnackBar()
// openSnackBar() {
//   this._snackBar.open("Clube deletado com sucesso!");
// }
