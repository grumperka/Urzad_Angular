import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditUrzadComponent } from './components/edit-urzad/edit-urzad.component';
import { ListaPowodowRozwoduComponent } from './components/lista-powodow-rozwodu/lista-powodow-rozwodu.component';
import { ListaUrzedowComponent } from './components/lista-urzedow/lista-urzedow.component';
import { ListaWojewodztwComponent } from './components/lista-wojewodztw/lista-wojewodztw.component';
import { LoggedComponent } from './components/logged/logged.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { EditAktRozwoduComponent } from './components/urzednik/edit-akt-rozwodu/edit-akt-rozwodu.component';
import { EditKierownikComponent } from './components/urzednik/edit-kierownik/edit-kierownik.component';
import { EditObywatelComponent } from './components/urzednik/edit-obywatel/edit-obywatel.component';
import { EditUrzednikComponent } from './components/urzednik/edit-urzednik/edit-urzednik.component';
import { ListaAktowRozwoduComponent } from './components/urzednik/lista-aktow-rozwodu/lista-aktow-rozwodu.component';
import { ListaAktowSlubowComponent } from './components/urzednik/lista-aktow-slubow/lista-aktow-slubow.component';
import { ListaAktowUrodzeniaComponent } from './components/urzednik/lista-aktow-urodzenia/lista-aktow-urodzenia.component';
import { ListaAktowZgonuComponent } from './components/urzednik/lista-aktow-zgonu/lista-aktow-zgonu.component';
import { ListaKierownikowComponent } from './components/urzednik/lista-kierownikow/lista-kierownikow.component';
import { ListaObywateliComponent } from './components/urzednik/lista-obywateli/lista-obywateli.component';
import { ListaUrzednikowComponent } from './components/urzednik/lista-urzednikow/lista-urzednikow.component';

const routes: Routes = [
  {
    path: 'wojewodztwa', component: ListaWojewodztwComponent
  },
  {
    path: 'urzedy', component: ListaUrzedowComponent
  },
  {
    path: 'akty_rozwodow', component: ListaAktowRozwoduComponent
  },
  {
    path: 'akty_slubow', component: ListaAktowSlubowComponent
  },
  {
    path: 'akty_zgonow', component: ListaAktowZgonuComponent
  },
  {
    path: 'akty_urodzenia', component: ListaAktowUrodzeniaComponent
  },
  {
    path: 'lista_obywateli', component: ListaObywateliComponent
  },
  {
    path: 'lista_urzednikow', component: ListaUrzednikowComponent
  },
  {
    path: 'lista_kierownikow', component: ListaKierownikowComponent
  },
  {
    path: 'powody_rozwodow', component: ListaPowodowRozwoduComponent
  },
  {
    path: 'updateUrzad/:id', component: EditUrzadComponent
  },
  {
     path: 'updateKierownik/:id', component: EditKierownikComponent,
  },
  {
     path: 'updateObywatel/:id', component: EditObywatelComponent,
  },
  {
    path: 'updateUrzednik/:id', component: EditUrzednikComponent,
  }
  ,
  {
    path: 'updateAktRozwodu/:id', component: EditAktRozwoduComponent,
  }
  ,
  {
    path: 'login', component: LoginFormComponent,
  },
  {
    path: 'logged', component: LoggedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
