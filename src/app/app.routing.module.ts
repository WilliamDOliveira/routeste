import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { ModuleWithProviders } from '@angular/core';
import { StyleComponent } from './style/style.component';
import { AuthGuard } from './auth/auth.guard';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoFormComponent } from './alunos/aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './alunos/aluno-detalhe/aluno-detalhe.component';
import { CursosGuard } from './auth/cursos.guard';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { AlunosGuard } from './auth/alunos.guard';
import { CarouselComponent } from './carousel/carousel.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  // { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule' },
  // { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule' },
  {
    path: 'alunos', component: AlunosComponent,
    children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunoFormComponent },
    ],
    canActivateChild: [AlunosGuard]
  },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:id', component: CursoDetalheComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'style', component: StyleComponent },
  { path: '', component: HomeComponent },
];
// export const Routing : ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );
@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
