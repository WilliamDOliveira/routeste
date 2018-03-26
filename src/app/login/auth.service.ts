import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  mostrarMenuEmitter = new EventEmitter<boolean>();

  private usuarioAutenticado = false;

  fazerLogin(user) {
    return new Promise<any>((resolve, reject) => {
      if (user.nome === 'admin@email.com' && user.senha === '1') {
        this.mostrarMenuEmitter.emit(true);
        this.usuarioAutenticado = true;
        resolve(true);
      } else {
        this.mostrarMenuEmitter.emit(false);
        this.usuarioAutenticado = false;
        reject(false);
      }
    });
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }


}
