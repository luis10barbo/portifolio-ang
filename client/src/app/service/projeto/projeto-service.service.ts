import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../environment';
import { ProjetoCriarType } from '../../model/projetoModel';

@Injectable({
  providedIn: 'root'
})
export class ProjetoServiceService {
  constructor(private httpClient: HttpClient) { }

  public criarProjeto(projeto: ProjetoCriarType) {
    return this.httpClient.post(`${enviroment.urlBackend}/project`, projeto, {withCredentials: true})
  }

  public getProjects() {
    return this.httpClient.get(`${enviroment.urlBackend}/project`, {withCredentials: true});
  }
}
