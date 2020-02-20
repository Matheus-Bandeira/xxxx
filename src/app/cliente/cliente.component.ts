import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente;
  clientes: Cliente[] = [];

  constructor(private service: ClienteService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
     this.service.find().subscribe((res)=> {
      this.clientes = res;
    });
  }
}
