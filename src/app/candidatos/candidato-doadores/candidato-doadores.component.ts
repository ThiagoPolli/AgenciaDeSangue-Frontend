import { Candidato } from './../candidatos';
import { CandidatosService } from './../../services/candidatos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidato-doadores',
  templateUrl: './candidato-doadores.component.html',
  styleUrls: ['./candidato-doadores.component.css']
})
export class CandidatoDoadoresComponent implements OnInit {

  candidatos: Candidato[] = [];

  constructor(private service: CandidatosService) { }

  ngOnInit() {
    this.getAllCandidatos();
  }

  getAllCandidatos() {
    this.service.getAptCandidatos().subscribe(res => {
      this.candidatos = res
    })
  }


}
