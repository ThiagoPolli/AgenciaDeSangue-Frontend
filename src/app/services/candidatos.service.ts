import { QuantidadeSanguineo } from './../candidatos/qtd-sangue';
import { CandidatoEstado } from './../candidatos/candidato-estado';
import { ImcIdade } from './../candidatos/imc-idade';
import { MediaSanguineo } from './../candidatos/media-sanguineo';
import { PersentualObeso } from './../candidatos/persentual-obeso';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from '../candidatos/candidatos';
import { PaginaCandidato } from '../candidatos/PaginaCandidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  apiURL: string = environment.apiURL + '/api/candidato'

  constructor(private http: HttpClient) { }

  getPageCandidatos(page: any, size: any): Observable<PaginaCandidato> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(`${this.apiURL}/page?${params}`)
  }
  search(nome: string): Observable<Candidato[]> {
    const params = new HttpParams().set('nome', nome);
    const url = this.apiURL + '/search?' + params.toString();
    console.log('URL = ', url)
    return this.http.get<any>(url);
  }

  getAllCandidatos(): Observable<Candidato[]> {
    return this.http.get<any>(`${this.apiURL}`)
  }
  getByIdCandidato(id: number): Observable<Candidato> {
    return this.http.get<any>(`${this.apiURL}/${id}`)
  }
  getPersentualObesos(): Observable<PersentualObeso[]> {
    return this.http.get<any>(`${this.apiURL}/percentualobeso`)
  }
  getMediaSanguineo(): Observable<MediaSanguineo[]> {
    return this.http.get<any>(`${this.apiURL}/mediasanguineo`)
  }
  getImcIdade(): Observable<ImcIdade[]> {
    return this.http.get<any>(`${this.apiURL}/imcporidade`)
  }
  getAptCandidatos(): Observable<Candidato[]> {
    return this.http.get<any>(`${this.apiURL}/candidatoapt`)
  }
  getQtdEstado(): Observable<CandidatoEstado[]> {
    return this.http.get<any>(`${this.apiURL}/estado`)
  }
  getQtdSangue(): Observable<QuantidadeSanguineo[]> {
    return this.http.get<any>(`${this.apiURL}/potencial`)
  }

  insert(cliente: Candidato): Observable<any> {
    return this.http.post<Candidato>(`${this.apiURL}`, cliente)
  }

  update(cliente: Candidato): Observable<any> {
    return this.http.put<Candidato>(`${this.apiURL}/${cliente.id}`, cliente)
  }


}

