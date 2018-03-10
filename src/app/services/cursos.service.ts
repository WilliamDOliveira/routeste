import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
    return [
      { 'id': 1, 'nome': 'Curso Angular'},
      { 'id': 2, 'nome': 'Curso PHP'},
      { 'id': 3, 'nome': 'Curso HTML'}
    ];
  }

  getCursobyId( id ){
    return this.getCursos().filter( arr => {
      return arr['id'] == id;
    });
  }
}
