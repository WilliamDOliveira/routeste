import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../../services/alunos.service';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  private aluno: any = [];
  private id: number;
  private inscrito: ISubscription;

  constructor(private alunoService: AlunosService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.inscrito = this.activeRoute.params.subscribe( params => {
      this.id = params['id'];
    });
    this.aluno = this.alunoService.getAlunosById( this.id )[0];
  }

  ngOnDestroy(){
    this.inscrito.unsubscribe();
  }

}
