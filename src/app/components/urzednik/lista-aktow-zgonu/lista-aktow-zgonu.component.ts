import { Component, OnInit } from '@angular/core';
import { Akty_zgonu } from '../../objects/Akty_zgonu';

@Component({
  selector: 'app-lista-aktow-zgonu',
  templateUrl: './lista-aktow-zgonu.component.html',
  styleUrls: ['./lista-aktow-zgonu.component.css']
})
export class ListaAktowZgonuComponent implements OnInit {
  listaAktow: Array<Akty_zgonu> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
