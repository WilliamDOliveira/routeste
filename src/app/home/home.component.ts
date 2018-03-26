import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()


export class HomeComponent implements OnInit {
  ngOnInit() {
    console.log('document: ', this.document.title = 'Angular Document' );
  }

  constructor( @Inject(DOCUMENT) private document: any) { }


  recebeConteudo(evt) {
    console.log('evt: ', evt);
  }

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
