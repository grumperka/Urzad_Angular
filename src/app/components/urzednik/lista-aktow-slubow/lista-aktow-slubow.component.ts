import { Component, OnInit } from '@angular/core';
import { Akty_slubow } from '../../objects/Akty_slubow';

@Component({
  selector: 'app-lista-aktow-slubow',
  templateUrl: './lista-aktow-slubow.component.html',
  styleUrls: ['./lista-aktow-slubow.component.css']
})
export class ListaAktowSlubowComponent implements OnInit {
  listaAktow: Array<Akty_slubow> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
