import { CandidatosService } from './../../services/candidatos.service';
import { Candidato } from './../candidatos';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-candidato-list',
  templateUrl: './candidato-list.component.html',
  styleUrls: ['./candidato-list.component.css']
})
export class CandidatoListComponent implements OnInit {

  candidatos: Candidato[] = [];

  nome!: string;

  totalElementos = 0;
  pagina = 0;
  tamanho = 24;
  pageSizeOptions: number[] = [24];
  public paginaAtual = 1;

  constructor(private service: CandidatosService) { }

  ngOnInit() {
    this.getPageCandidatos()
  }


  getAllCandidatos() {
    this.service.getAllCandidatos().subscribe(res => {
      this.candidatos = res
    })
  }

  getPageCandidatos(page = 0, size = 24) {
    this.service.getPageCandidatos(page, size).subscribe(res => {
      this.candidatos = res.content;
      this.totalElementos = res.totalElements;
      this.pagina = res.number
    })
  }

  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.getPageCandidatos(this.pagina, this.tamanho)
  }

  search() {
    if (this.nome == null || this.nome == '') {
      this.getPageCandidatos()
    } else {
      this.service.search(this.nome).subscribe(res => {
        this.candidatos = res;
      })
    }

  }

}
