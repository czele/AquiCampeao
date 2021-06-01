import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classificacao } from '../model/classificacaomodel';

@Injectable({
  providedIn: 'root'
})
export class ClassificacaoService {

  baseUrl:string = environment.baseUrl

  constructor(private _http: HttpClient) { }

  listar():Observable<Classificacao[]> {
    return this._http.get<Classificacao[]>(`${this.baseUrl}classificacao`);
  }
}
