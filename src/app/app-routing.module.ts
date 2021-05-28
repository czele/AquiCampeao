import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificacaoComponent } from './component/classificacao/classificacao.component';
import { ClubeComponent } from './component/clube/clube.component';
import { ClubelistarComponent } from './component/clubelistar/clubelistar.component';
import { HomeComponent } from './component/home/home.component';
import { JogadorComponent } from './component/jogador/jogador.component';
import { JogadorlistarComponent } from './component/jogadorlistar/jogadorlistar.component';
import { PartidaComponent } from './component/partida/partida.component';
import { PartidalistarComponent } from './component/partidalistar/partidalistar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clube', component: ClubeComponent },
  { path: 'jogador', component: JogadorComponent },
  { path: 'partida', component: PartidaComponent },
  { path: 'clubelistar', component: ClubelistarComponent },
  { path: 'jogadorlistar', component: JogadorlistarComponent },
  { path: 'partidalistar', component: PartidalistarComponent },
  { path: 'classificacao', component: ClassificacaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
