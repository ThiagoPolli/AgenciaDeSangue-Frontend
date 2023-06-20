
import { CandidatoDoadoresComponent } from './candidatos/candidato-doadores/candidato-doadores.component';
import { CandidatoFormsComponent } from './candidatos/candidato-forms/candidato-forms.component';
import { CandidatoListComponent } from './candidatos/candidato-list/candidato-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
      NavComponent,
      CandidatoListComponent,
      HomeComponent,
      CandidatoFormsComponent,
      CandidatoDoadoresComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
