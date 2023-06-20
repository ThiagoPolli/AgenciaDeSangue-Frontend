
import { CandidatoEstado } from './../candidatos/candidato-estado';
import { ImcIdade } from './../candidatos/imc-idade';
import { MediaSanguineo } from './../candidatos/media-sanguineo';
import { PersentualObeso } from './../candidatos/persentual-obeso';
import { CandidatosService } from './../services/candidatos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  percentulObeso : PersentualObeso[] = [];
  mediaSanguineo: MediaSanguineo [] =[];
  jsonData: any;
  faixasIdade: ImcIdade [] = [];
  qtdEstado: CandidatoEstado[] = [];
  qtdSangue: any;

  persentualFeminino!: any;
  persentualHomens!: any;


  constructor(private service: CandidatosService) { }

  ngOnInit() {
    this.getPersentualObeso();
    this.getMediaSanguineo();
    this.getImcIdade();
    this.getAllCandidatos();
    this. getQtdSangue();
  }
  getMediaSanguineo(){
    this.service.getMediaSanguineo().subscribe(res =>  this.mediaSanguineo = res)
  }
  getImcIdade() {
    this.service.getImcIdade().subscribe(res => {
     this.jsonData = res

    });
  }
  getQtdSangue() {
    this.service.getQtdSangue().subscribe(res => {
      this.qtdSangue = res
    })
  }


  getPersentualObeso() {
    this.service.getPersentualObesos().subscribe(res => {
        res.map(f => {
        if(f.sexo.toString() == "Feminino"){
          this.persentualFeminino = f.percentual_obesos
        }else{
          this.persentualHomens = f.percentual_obesos
        }
      });
    })
  }
  getAllCandidatos() {
    this.service.getQtdEstado().subscribe(res => {
      this.qtdEstado = res
    })
  }

}
