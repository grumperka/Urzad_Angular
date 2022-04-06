import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { UrzednikComponent } from './components/urzednik/urzednik/urzednik.component';
import { ListaUrzednikowComponent } from './components/urzednik/lista-urzednikow/lista-urzednikow.component';
import { ListaObywateliComponent } from './components/urzednik/lista-obywateli/lista-obywateli.component';
import { ListaAktowRozwoduComponent } from './components/urzednik/lista-aktow-rozwodu/lista-aktow-rozwodu.component';
import { ListaAktowSlubowComponent } from './components/urzednik/lista-aktow-slubow/lista-aktow-slubow.component';
import { ListaAktowUrodzeniaComponent } from './components/urzednik/lista-aktow-urodzenia/lista-aktow-urodzenia.component';
import { ListaAktowZgonuComponent } from './components/urzednik/lista-aktow-zgonu/lista-aktow-zgonu.component';
import { ListaKierownikowComponent } from './components/urzednik/lista-kierownikow/lista-kierownikow.component';
import { ListaPowodowRozwoduComponent } from './components/lista-powodow-rozwodu/lista-powodow-rozwodu.component';
import { ListaUrzedowComponent } from './components/lista-urzedow/lista-urzedow.component';
import { ListaWojewodztwComponent } from './components/lista-wojewodztw/lista-wojewodztw.component';
import { AddUrzadComponent } from './components/add-urzad/add-urzad.component';

@NgModule({
  declarations: [
    AppComponent,
    UrzednikComponent,
    ListaUrzednikowComponent,
    ListaObywateliComponent,
    ListaAktowRozwoduComponent,
    ListaAktowSlubowComponent,
    ListaAktowUrodzeniaComponent,
    ListaAktowZgonuComponent,
    ListaKierownikowComponent,
    ListaPowodowRozwoduComponent,
    ListaUrzedowComponent,
    ListaWojewodztwComponent,
    AddUrzadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
