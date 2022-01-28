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
   addTecnico(tec : Tecnico): Observable<Tecnico> {
    return this.http.post<Tecnico>(API_CONFIG.addtURL,tec);
  }

  getAllTecnico(): Observable<Tecnico[]>{
    return this.http.get<Tecnico[]>(API_CONFIG.gettURL);
  }

  updateTecnico(tec :Tecnico) : Observable<Tecnico>{
    return this.http.put<Tecnico>(API_CONFIG.updattUrl, tec);
  }

  deleteTecnico(tec : Tecnico) : Observable<Tecnico> {
    return this.http.delete<Tecnico>(API_CONFIG.delettUrl+'/'+tec.id);
  }


/*Cliente Service */
  addCliente(cli : Cliente): Observable<Cliente> {
   return this.http.post<Cliente>(API_CONFIG.addcURL, cli);
 }

 getAllCliente(): Observable<Cliente[]>{
   return this.http.get<Cliente[]>(API_CONFIG.getcURL);
 }

 updateCliente(cli :Cliente) : Observable<Cliente>{
   return this.http.put<Cliente>(API_CONFIG.updatecUrl, cli);
 }

 deleteCliente(cli : Cliente) : Observable<Cliente> {
   return this.http.delete<Cliente>(API_CONFIG.deletecUrl+'/'+cli.id);
 }



/*Chamado Service */
 addChamado(cha : Chamado): Observable<Chamado> {
   return this.http.post<Chamado>(API_CONFIG.addchURL,cha);
 }

 getAllChamado(): Observable<Chamado[]>{
   return this.http.get<Chamado[]>(API_CONFIG.getchURL);
 }

 updateChamado(cha :Chamado) : Observable<Chamado>{
   return this.http.put<Chamado>(API_CONFIG.updatechUrl, cha);
 }

 deleteChamado(cha : Chamado) : Observable<Chamado> {
   return this.http.delete<Chamado>(API_CONFIG.deletechUrl+'/'+cha.id);
 }

  /*Login Service */
  getlogIn(): Observable<Login[]>{
    return this.http.get<Login[]>(API_CONFIG.getlURL);
  }

  addsignUp(log: Login): Observable<Login> {
    return this.http.post<Login>(API_CONFIG.addlURL,log);
  }
}


