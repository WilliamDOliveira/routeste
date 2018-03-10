import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { StyleComponent } from './style/style.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'style', component: StyleComponent },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );
