import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = 'http://localhost:3000/clientes';
  constructor(private http: HttpClient) { }

  public find(){
    return this.http.get<Cliente[]>(`${this.url}`);
  }

  public create(cliente: Cliente){
    return this.http.post(`${this.url}`, cliente);
  }
}
