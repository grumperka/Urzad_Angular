import { Component, OnInit } from '@angular/core';
import { Urzednicy } from '../../objects/Urzednicy';

@Component({
  selector: 'app-lista-urzednikow',
  templateUrl: './lista-urzednikow.component.html',
  styleUrls: ['./lista-urzednikow.component.css']
})
export class ListaUrzednikowComponent implements OnInit {
  listaAktow: Array<Urzednicy> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
