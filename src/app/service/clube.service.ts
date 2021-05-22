import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clube } from '../model/clube.model';
import { Jogador } from '../model/jogador.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeService {

  baseUrl:string = environment.baseUrl
  // endpoint:string = "clube/listar"  

  constructor() { }

}
