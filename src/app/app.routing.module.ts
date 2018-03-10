import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { ModuleWithProviders } from '@angular/core';
import { StyleComponent } from './style/style.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'cursos', component: CursosComponent },
  { path: 'style', component: StyleComponent },
  { path: '', component: HomeComponent },
];
// export const Routing : ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );
@NgModule({
imports: [
  RouterModule.forRoot( APP_ROUTES )
],
exports: [
  RouterModule
]
})

export class AppRoutingModule{}
