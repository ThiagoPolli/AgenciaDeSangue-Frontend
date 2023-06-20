
import { CandidatoDoadoresComponent } from './candidatos/candidato-doadores/candidato-doadores.component';
import { CandidatoFormsComponent } from './candidatos/candidato-forms/candidato-forms.component';
import { CandidatoListComponent } from './candidatos/candidato-list/candidato-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'candidato-list', component: CandidatoListComponent},
  {path:'candidato-forms', component: CandidatoFormsComponent},
  {path:'candidato-forms/:id', component: CandidatoFormsComponent},
  {path:'candidato-doadores', component: CandidatoDoadoresComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
