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
import  { MzSidenavModule, // sidebar
          MzNavbarModule, // navbar menu
          MzCollectionModule, // list
          MzIconModule,  // icons[1]
          MzIconMdiModule, // icons[2]
          MzInputModule,
          MzButtonModule, //form
        } from 'ng2-materialize';

// Componentes
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

// Services
import { CursosService } from './services/cursos.service';
//Modules
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
import { AuthService } from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidebarMenuComponent,
    StyleComponent,
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
    MzButtonModule,
    CursosModule,
    AlunosModule

  ],
  providers: [
    CursosService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

