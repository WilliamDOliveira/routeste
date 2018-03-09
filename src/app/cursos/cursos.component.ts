import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  private cursos:any[];
  private pagina:number;
  private inscricao: ISubscription;

  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.inscricao = this.activatedRoute.queryParams.subscribe( (params:any) => {
      this.pagina = params['pagina'];
    } );

    this.cursos = this.cursosService.getCursos();
    console.log('this.curso: ', this.cursos);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  proxima(){
    // this.pagina++;
    this.router.navigate(['/cursos'],{queryParams:{'pagina':++this.pagina}});
  }

}
