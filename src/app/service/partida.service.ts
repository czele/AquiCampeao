import { HttpClient, HttpParams } from '@angular/common/http';
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
    return this._http.get<Partida[]>(`${this.baseUrl}partida/listar`)
  }

  inserir(partida: Partida): Observable<any> {
    return this._http.post<any>(`${this.baseUrl}partida/inserir`, partida);
  }

  obter(id: number): Observable<Partida>{
    // Parei aqui, não consegui entender o que fizemos aqui
    const options = {
      params: new HttpParams().set('id', id.toString())}
    return this._http.get<Partida>(`${this.baseUrl}partida/obter`, options)
  }

  deletar(id:number): Observable<any> {
    const options= {
      params: new HttpParams().set('id', id.toString())
    }
    return this._http.delete<any>(`${this.baseUrl}partida/deletar`, options);
  }


}