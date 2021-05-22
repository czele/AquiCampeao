import { Component, OnInit } from '@angular/core';
import { Clube } from 'src/app/model/clube.model';

@Component({
  selector: 'app-partidalistar',
  templateUrl: './partidalistar.component.html',
  styleUrls: ['./partidalistar.component.css']
})
export class PartidalistarComponent implements OnInit {

  clubeList:Clube[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
