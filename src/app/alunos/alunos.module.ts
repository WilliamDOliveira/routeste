import { NgModule } from '@angular/core';
import { AlunosComponent } from './alunos.component';
import { CommonModule } from '@angular/common';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from '../services/alunos.service';
import { MzCollectionModule } from 'ng2-materialize';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    MzCollectionModule,
    RouterModule
  ],
  exports: [],
  providers: [
    AlunosService
  ],
})
export class AlunosModule { }
