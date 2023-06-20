import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CandidatosService } from './../../services/candidatos.service';
import { Candidato } from './../candidatos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidato-forms',
  templateUrl: './candidato-forms.component.html',
  styleUrls: ['./candidato-forms.component.css']
})
export class CandidatoFormsComponent implements OnInit {

  candidato: Candidato;
  success: boolean = false;
  erro: boolean = false;
  errors: any;
  id!: number;


  constructor(
    private service: CandidatosService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.candidato = new Candidato();
  }

  ngOnInit() {
    let params: Observable<Params> = this.activeRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getByIdCandidato(this.id).subscribe(
          {
            next: (res) => {
              this.candidato = res;
            },
            error: (errorResponse) => {
              this.candidato = new Candidato();
            }
          }
        );
      }
    })
  }

  voltar() {
    this.router.navigate(['/candidato-list'])
  }

  onSubmit() {
    if (this.id) {
      this.service.update(this.candidato).subscribe({
        next: (res) => {
          this.success = true;
          this.erro = false
          this.candidato = res;
        },
        error: (errorResponse) => {
          this.success = false;
          this.erro = true

          this.errors = errorResponse.error.errors[0].defaultMessage;
        }
      });
    }
    else {

      this.service.insert(this.candidato).subscribe({
        next: (res) => {
          this.success = true;
          this.erro = false
          this.candidato = res;
        },
        error: (errorResponse) => {
          this.success = false;
          this.erro = true

          this.errors = errorResponse.error.errors[0].defaultMessage;


          console.log('ERRO',this.errors)
        }
      });
    }
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-based
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  parseDate(dateString: string): Date {
    const parts = dateString.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are zero-based
    const day = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }



}
