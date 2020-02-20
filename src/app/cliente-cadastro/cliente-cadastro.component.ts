import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  cliente: Cliente;

  constructor(private service: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente;
  }

  public gravar(){
    this.service.create(this.cliente).subscribe((res)=>{
      this.cliente = new Cliente();
    });
  }
}
