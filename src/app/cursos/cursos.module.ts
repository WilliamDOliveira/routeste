import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CursosService } from '../services/cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';
import { MzIconModule, MzIconMdiModule, MzCollectionModule } from 'ng2-materialize';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // routing cursos
    CursosRoutingModule,
    // materialize
    MzIconModule,
    MzIconMdiModule,
    MzCollectionModule,
  ],
  exports: [
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  providers: [
    CursosService
  ],
})
export class CursosModule { }
