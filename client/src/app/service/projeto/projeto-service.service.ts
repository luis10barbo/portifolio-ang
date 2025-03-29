import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../environment';
import { ProjetoType } from '../../model/projetoModel';

@Injectable({
  providedIn: 'root'
})
export class ProjetoServiceService {
  constructor(private httpClient: HttpClient) { }

  public criarProjeto(projeto: ProjetoType) {
    return this.httpClient.post(`${enviroment.urlBackend}/project`, projeto, {withCredentials: true})
  }

  public getProjects() {
    return this.httpClient.get<ProjetoType[]>(`${enviroment.urlBackend}/project`, {withCredentials: true});
  }
}
