import { Component, OnInit } from '@angular/core';
import { Kierownicy } from '../../objects/Kierownicy';

@Component({
  selector: 'app-lista-kierownikow',
  templateUrl: './lista-kierownikow.component.html',
  styleUrls: ['./lista-kierownikow.component.css']
})
export class ListaKierownikowComponent implements OnInit {
  listaAktow: Array<Kierownicy> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
