import { Component, OnInit } from '@angular/core';
import { Akty_rozwodu } from '../../objects/Akty_rozwodu';

@Component({
  selector: 'app-lista-aktow-rozwodu',
  templateUrl: './lista-aktow-rozwodu.component.html',
  styleUrls: ['./lista-aktow-rozwodu.component.css']
})
export class ListaAktowRozwoduComponent implements OnInit {
  listaAktow: Array<Akty_rozwodu> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
