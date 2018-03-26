import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// @ Página para testar o estilo dos elementos html @
import { StyleComponent } from './style/style.component';
// Rotas
// import { Routing } from './routing'; | alterando para o module
import { AppRoutingModule } from './app.routing.module';

// Angular Materialize | https://sherweb.github.io/ng2-materialize
// Angular Demo and Import Componentes | https://sherweb.github.io/ng2-materialize/icon
import {
  MzSidenavModule, // sidebar
  MzNavbarModule, // navbar menu
  MzCollectionModule, // list
  MzIconModule,  // icons[1]
  MzIconMdiModule, // icons[2]
  MzInputModule,
  MzButtonModule, // form
} from 'ng2-materialize';

// Componentes
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

// Services
import { CursosService } from './services/cursos.service';
// Modules
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms/src/model';
import { AuthGuard } from './auth/auth.guard';
import { CursosGuard } from './auth/cursos.guard';
import { AlunosGuard } from './auth/alunos.guard';
import { CompTesteComponent } from './components/comp-teste/comp-teste.component';
import { LocationComponent } from './components/location/location.component';
import { MzCardModule } from 'ng2-materialize';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidebarMenuComponent,
    StyleComponent,
    CompTesteComponent,
    LocationComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule, // Módulo Default [Root]
    // Routing, // Módulo de rotas principal [Root]
    AppRoutingModule,
    // @Materialize [Módulos]
    MzSidenavModule,
    MzNavbarModule,
    MzCollectionModule,
    MzIconModule,
    MzIconMdiModule,
    MzInputModule,
    MzCardModule,
    MzButtonModule,
    CursosModule,
    AlunosModule,
    FormsModule,

  ],
  providers: [
    CursosService,
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

