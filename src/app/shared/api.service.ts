import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Chamado, Cliente, Tecnico, Login } from '../core/models/help.model';


@Injectable({
  providedIn: 'root'

})
export class ApiService {

  constructor(private http : HttpClient) {

   }

   /*Tecnico Service */
   addTecnico(tec : Tecnico): Observable<Tecnico> {
    return this.http.post<Tecnico>(environment.addtURL,tec);
  }

  getAllTecnico(): Observable<Tecnico[]>{
    return this.http.get<Tecnico[]>(environment.gettURL);
  }

  updateTecnico(tec :Tecnico) : Observable<Tecnico>{
    return this.http.put<Tecnico>(environment.updattUrl, tec);
  }

  deleteTecnico(tec : Tecnico) : Observable<Tecnico> {
    return this.http.delete<Tecnico>(environment.delettUrl+'/'+tec.id);
  }


/*Cliente Service */
  addCliente(cli : Cliente): Observable<Cliente> {
   return this.http.post<Cliente>(environment.addcURL, cli);
 }

 getAllCliente(): Observable<Cliente[]>{
   return this.http.get<Cliente[]>(environment.getcURL);
 }

 updateCliente(cli :Cliente) : Observable<Cliente>{
   return this.http.put<Cliente>(environment.updatecUrl, cli);
 }

 deleteCliente(cli : Cliente) : Observable<Cliente> {
   return this.http.delete<Cliente>(environment.deletecUrl+'/'+cli.id);
 }



/*Chamado Service */
 addChamado(cha : Chamado): Observable<Chamado> {
   return this.http.post<Chamado>(environment.addchURL,cha);
 }

 getAllChamado(): Observable<Chamado[]>{
   return this.http.get<Chamado[]>(environment.getchURL);
 }

 updateChamado(cha :Chamado) : Observable<Chamado>{
   return this.http.put<Chamado>(environment.updatechUrl, cha);
 }

 deleteChamado(cha : Chamado) : Observable<Chamado> {
   return this.http.delete<Chamado>(environment.deletechUrl+'/'+cha.id);
 }

  /*Login Service */
  getlogIn(): Observable<Login[]>{
    return this.http.get<Login[]>(environment.getlURL);
  }

  addsignUp(log: Login): Observable<Login> {
    return this.http.post<Login>(environment.addlURL,log);
  }
}


