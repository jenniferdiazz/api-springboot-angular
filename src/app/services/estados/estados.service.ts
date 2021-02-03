import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private API_SERVER = "http://localhost:8080/estados/";

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllEstadoByPais(idPais) : Observable<any>{
    return this.httpClient.get(this.API_SERVER+idPais);
  }
}
