import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Chamado, Cliente, Tecnico, Login } from '../core/models/help.model';
import { API_CONFIG } from './config/api.config';


@Injectable({
  providedIn: 'root'

})
export class ApiService {

  constructor(private http : HttpClient) {

   }

   /*Tecnico Service */
   addTecnico(addTecnico : Tecnico): Observable<Tecnico> {
    return this.http.post<Tecnico>(`${API_CONFIG.baseUrl}/tec/`,addTecnico);
  }

  getAllTecnico(getAll : Tecnico): Observable<Tecnico[]>{
    return this.http.get<Tecnico[]>(`${API_CONFIG.baseUrl}/tec/`,);
  }

  updateTecnico(updateTecnico :Tecnico) : Observable<Tecnico>{
    return this.http.put<Tecnico>(`${API_CONFIG.baseUrl}/tec/${updateTecnico.id}`,updateTecnico);
  }

  deleteTecnico(tec : Tecnico) : Observable<Tecnico> {
    return this.http.delete<Tecnico>(environment.delettUrl+'/'+tec.id);
  }


/*Cliente Service */
  addCliente(addCliente : Cliente): Observable<Cliente> {
   return this.http.post<Cliente>(`${API_CONFIG.baseUrl}/cha/`,addCliente);
 }

 getAllCliente(): Observable<Cliente[]>{
   return this.http.get<Cliente[]>(environment.getcURL);
 }

 updateCliente(updateCliente :Cliente) : Observable<Cliente>{
   return this.http.put<Cliente>(`${API_CONFIG.baseUrl}/cli/${updateCliente.id}`,updateCliente);
 }

 deleteCliente(cli : Cliente) : Observable<Cliente> {
   return this.http.delete<Cliente>(environment.deletecUrl+'/'+cli.id);
 }



/*Chamado Service */
 addChamado(addChamado : Chamado): Observable<Chamado> {
   return this.http.post<Chamado>(`${API_CONFIG.baseUrl}/cha`,addChamado);
 }

 getAllChamado(): Observable<Chamado[]>{
   return this.http.get<Chamado[]>(environment.getchURL);
 }

 updateChamado(updateChamado :Chamado) : Observable<Chamado>{
   return this.http.put<Chamado>(`${API_CONFIG.baseUrl}/cli/${updateChamado.id}`,updateChamado);
 }

 deleteChamado(cha : Chamado) : Observable<Chamado> {
   return this.http.delete<Chamado>(environment.deletechUrl+'/'+cha.id);
 }

  /*Login Service */
  getlogIn(): Observable<Login[]>{
    return this.http.get<Login[]>(environment.getlURL);
  }

  addsignUp(addLogin: Login): Observable<Login> {
    return this.http.post<Login>(`${API_CONFIG.baseUrl}/log`,addLogin);
  }
}


