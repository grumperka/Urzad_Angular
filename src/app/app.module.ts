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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditUrzadComponent } from './components/edit-urzad/edit-urzad.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddKierownikComponent } from './components/urzednik/add-kierownik/add-kierownik.component';
import { AddObywatelComponent } from './components/urzednik/add-obywatel/add-obywatel.component';
import { AddUrzednikComponent } from './components/urzednik/add-urzednik/add-urzednik.component';
import { AddAktUrodzeniaComponent } from './components/urzednik/add-akt-urodzenia/add-akt-urodzenia.component';
import { AddAktSlubuComponent } from './components/urzednik/add-akt-slubu/add-akt-slubu.component';
import { AddAktRozwoduComponent } from './components/urzednik/add-akt-rozwodu/add-akt-rozwodu.component';
import { AddAktZgonuComponent } from './components/urzednik/add-akt-zgonu/add-akt-zgonu.component';
import { EditKierownikComponent } from './components/urzednik/edit-kierownik/edit-kierownik.component';
import { EditObywatelComponent } from './components/urzednik/edit-obywatel/edit-obywatel.component';
import { EditUrzednikComponent } from './components/urzednik/edit-urzednik/edit-urzednik.component';
import { EditAktRozwoduComponent } from './components/urzednik/edit-akt-rozwodu/edit-akt-rozwodu.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoggedComponent } from './components/logged/logged.component';
import { ListaAktowUrzednikComponent } from './components/urzednik/lista-aktow-urzednik/lista-aktow-urzednik.component';
import { ListaAktowObywatelComponent } from './components/lista-aktow-obywatel/lista-aktow-obywatel.component';
import { ListaAktowUrzadComponent } from './components/urzednik/lista-aktow-urzad/lista-aktow-urzad.component';

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
    AddUrzadComponent,
    EditUrzadComponent,
    NavBarComponent,
    AddKierownikComponent,
    AddObywatelComponent,
    AddUrzednikComponent,
    AddAktUrodzeniaComponent,
    AddAktSlubuComponent,
    AddAktRozwoduComponent,
    AddAktZgonuComponent,
    EditKierownikComponent,
    EditObywatelComponent,
    EditUrzednikComponent,
    EditAktRozwoduComponent,
    LoginFormComponent,
    LoggedComponent,
    ListaAktowUrzednikComponent,
    ListaAktowObywatelComponent,
    ListaAktowUrzadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
