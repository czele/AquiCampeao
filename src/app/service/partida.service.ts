import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Partida } from '../model/partida.model';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  baseUrl: string = environment.baseUrl
  // endpoint:string = "partida/listar"  

  constructor(private _http: HttpClient) { }

  listar(): Observable<Partida[]>{
    return this._http.get<Partida[]>(`${this.baseUrl}partidalistar`)
  }


  inserir(partida: Partida): Observable<any> {
    return this._http.post<any>(`${this.baseUrl}partidaincluir`, partida);
  }

}