import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditUrzadComponent } from './components/edit-urzad/edit-urzad.component';
import { ListaPowodowRozwoduComponent } from './components/lista-powodow-rozwodu/lista-powodow-rozwodu.component';
import { ListaUrzedowComponent } from './components/lista-urzedow/lista-urzedow.component';
import { ListaWojewodztwComponent } from './components/lista-wojewodztw/lista-wojewodztw.component';

const routes: Routes = [
  {
    path: 'wojewodztwa', component: ListaWojewodztwComponent
  },
  {
    path: 'urzedy', component: ListaUrzedowComponent
  },
  {
    path: 'powody_rozwodow', component: ListaPowodowRozwoduComponent
  },
  {
    path: 'update/:id', component: EditUrzadComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
