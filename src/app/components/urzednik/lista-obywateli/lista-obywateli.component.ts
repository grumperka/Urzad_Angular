import { Component, OnInit } from '@angular/core';
import { Obywatele } from '../../objects/Obywatele';

@Component({
  selector: 'app-lista-obywateli',
  templateUrl: './lista-obywateli.component.html',
  styleUrls: ['./lista-obywateli.component.css']
})
export class ListaObywateliComponent implements OnInit {
  listaAktow: Array<Obywatele> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
