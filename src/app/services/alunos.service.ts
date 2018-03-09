import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any = [
    { "nome":"Alfonso","id": '1',"email":"alunos01@email.com"},
    { "nome":"Juca","id": '2',"email":"alunos02@email.com"},
    { "nome":"Mag","id": '3',"email":"alunos03@email.com"},
  ];

  getAlunos(){
    return this.alunos;
  }

  getAlunosById(id){
    return this.alunos.filter( arr => {
      return arr['id'] == id;
    })
  }

  constructor() { }

}
