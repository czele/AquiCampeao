import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jogador } from '../model/jogador.model';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  baseUrl: string = environment.baseUrl
  // endpoint:string = "jogador/listar"  

  constructor(private _http: HttpClient) { }

  listar(): Observable<Jogador[]> {
    return this._http.get<Jogador[]>(`${this.baseUrl}jogador/listar`);
  }
  // 

  obter(id:number): Observable<Jogador> {
    const options ={
      params: new HttpParams().set('id', id.toString())
    }
    return this._http.get<Jogador>(`${this.baseUrl}jogador/obter`, options);
  }

  inserir(jogador:Jogador): Observable<any> {
    return this._http.post<any>(`${this.baseUrl}jogador/inserir`, jogador);
  }

  atualizar(jogador:Jogador): Observable<any> {
    return this._http.put<any>(`${this.baseUrl}jogador/atualizar`, jogador);
  }

  deletar(id:number): Observable<any> {
    const options = {
      params: new HttpParams().set('id', id.toString())
    }
    return this._http.delete<any>(`${this.baseUrl}jogador/deletar`, options);
  }

}
