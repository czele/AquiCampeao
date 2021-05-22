import { Component, OnInit } from '@angular/core';
import { Clube } from 'src/app/model/clube.model';

@Component({
  selector: 'app-clubelistar',
  templateUrl: './clubelistar.component.html',
  styleUrls: ['./clubelistar.component.css']
})
export class ClubelistarComponent implements OnInit {

  clubeList:Clube[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
