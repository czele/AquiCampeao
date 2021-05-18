import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AquiCampeao';
 
  constructor(
    private _router:Router
    // Modo de gerencia de rotas do TypeScript
  ) { }

  openJogador(){
  // Configuração para chamar a rota
   this._router.navigateByUrl('/jogador')
  }
}

