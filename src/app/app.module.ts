import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './component/home/home.component';
import { PartidaComponent } from './component/partida/partida.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClubeComponent } from './component/clube/clube.component';
import { JogadorComponent } from './component/jogador/jogador.component';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatTableModule } from '@angular/material/table';
import { ClubelistarComponent } from './component/clubelistar/clubelistar.component';
import { PartidalistarComponent } from './component/partidalistar/partidalistar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JogadorService } from './service/jogador.service';
import { ClubeService } from './service/clube.service';
import { PartidaService } from './service/partida.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JogadorlistarComponent } from './component/jogadorlistar/jogadorlistar.component';
import { ClassificacaoComponent } from './component/classificacao/classificacao.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartidaComponent,
    ClubeComponent,
    JogadorComponent,
    JogadorlistarComponent,
    ClubelistarComponent,
    PartidalistarComponent,
    ClassificacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  providers: [
    HttpClient,
    JogadorService,
    ClubeService, /*olha aqui a injeção de dependência aqui no provider para o Angular saber*/
    PartidaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
