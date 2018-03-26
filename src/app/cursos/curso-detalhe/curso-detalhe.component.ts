import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  private id: string;
  private nome: string;
  private inscricao: Subscription;

  constructor(private route: ActivatedRoute, private serviceCursos: CursosService) {
  }

  // Recupera id da rota e fica escutando
  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );

    // this.serviceCursos.getCursobyId( 1 )
    // console.log('this.serviceCursos.getCursobyId( 1 ): ', this.serviceCursos.getCursobyId( 1 )[0]['nome']);

    // this.nome = (this.serviceCursos.getCursobyId( this.id )[0]['nome']) ? this.serviceCursos.getCursobyId( this.id )[0]['nome'] : 'PHP';
    this.nome = 'PHP';
  }
  // Cancela a inscrição quando componente for destruido
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
