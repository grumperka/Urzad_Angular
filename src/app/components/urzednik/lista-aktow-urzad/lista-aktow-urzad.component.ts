import { Component, OnInit } from '@angular/core';
import { AktyServiceService } from 'src/app/services/akty/akty-service.service';
import { Akty_rozwodu } from '../../objects/Akty_rozwodu';
import { Akty_slubow } from '../../objects/Akty_slubow';
import { Akty_urodzenia } from '../../objects/Akty_urodzenia';
import { Akty_zgonu } from '../../objects/Akty_zgonu';

@Component({
  selector: 'app-lista-aktow-urzad',
  templateUrl: './lista-aktow-urzad.component.html',
  styleUrls: ['./lista-aktow-urzad.component.css']
})
export class ListaAktowUrzadComponent implements OnInit {
  listaAktowUrodzenia: Akty_urodzenia[] = [];
  listaAktowSlubu: Akty_slubow[] = [];
  listaAktowRozwodu: Akty_rozwodu[] = [];
  listaAktowZgonow: Akty_zgonu[] = [];
  userID: string | null;

  constructor(private aktyService: AktyServiceService) { }

  ngOnInit(): void {
    this.userID = sessionStorage.getItem("userID");

    if(this.userID != null){
    this.aktyService.getAktyUrodzeniaUrzad(this.userID).subscribe((lista) => this.listaAktowUrodzenia = lista);
    this.aktyService.getAktySlubowUrzad(this.userID).subscribe((lista) => this.listaAktowSlubu = lista);
    this.aktyService.getAktRozwoduUrzad(this.userID).subscribe((lista) => this.listaAktowRozwodu = lista);
    this.aktyService.getAktyZgonowUrzad(this.userID).subscribe((lista) => this.listaAktowZgonow = lista);
  }
  }

}
