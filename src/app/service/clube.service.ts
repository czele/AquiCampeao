import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clube } from '../model/clube.model';
import { Jogador } from '../model/jogador.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeService {


  baseUrl: string = environment.baseUrl
  // endpoint:string = "clube/listar"  

  constructor(private _http: HttpClient) { }

  listar(): Observable<Clube[]> {
    return this._http.get<Clube[]>(`${this.baseUrl}clube/listar`);
  }

  inserir(clube: Clube): Observable<any> {
    return this._http.post<any>(`${this.baseUrl}clube/inserir`, clube);
  }

  obter(id: number): Observable<any> {
    const options = {
      params: new HttpParams()
        .set('id', id.toString())
    }
    return this._http.get<Clube[]>(`${this.baseUrl}clube/obter`, options);
  }
  // Tem que criar um método que chame o clube obter e procure o id com o nome do Clube
  atualizar(clube: Clube): Observable<any> {
    return this._http.put<any>(`${this.baseUrl}clube/atualizar`, clube);
  }
  deletar(id: number): Observable<any> {
    const options = {
      params: new HttpParams()
        .set('id', id.toString())
    }
    return this._http.delete<any>(`${this.baseUrl}clube/deletar`,options);
  }

}
