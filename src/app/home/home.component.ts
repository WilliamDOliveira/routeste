import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {}

  // // Assina o elemento para ouvir somente enquanto ele existe
  // private assinante: ISubscription;
  // // Recupera a url ativa
  // private url: string;
  // // Recupera configurações de rotas
  // constructor( private route: ActivatedRoute ){  }
  // // Assina, recupera a url e retorna
  // ngOnInit() {
  //   this.assinante = this.route.url.subscribe( (url:UrlSegment[]) => { this.url = url[0].path })
  //   console.log('url retornada: ', this.url );
  // }
  // // Cancela a assinatura quando componente for destruido
  // ngOnDestroy(){
  //   this.assinante.unsubscribe();
  // }

}
