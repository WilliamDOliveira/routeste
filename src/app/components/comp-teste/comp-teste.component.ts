import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'comp-teste',
  templateUrl: './comp-teste.component.html',
  styleUrls: ['./comp-teste.component.css']
})
export class CompTesteComponent implements OnInit {

  data: any = {};

  @Input() nomecurso = 'NCurso';

  @Output() conteudo = new EventEmitter();

  bel = 'Bella';

  constructor() {
  }

  emitirEvento(){
    this.conteudo.emit('Conteudo vindo do componente');
    console.log('ja emiti');
  }

  ngOnInit() {
  }

}
