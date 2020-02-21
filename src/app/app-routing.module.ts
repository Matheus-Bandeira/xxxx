import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'lista', component: ClienteComponent },
  { path: 'cadastro', component: ClienteCadastroComponent },
  { path: 'cadastro/:id', component: ClienteCadastroComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
