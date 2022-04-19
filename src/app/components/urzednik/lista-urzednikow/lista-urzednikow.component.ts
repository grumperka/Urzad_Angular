import { Component, OnInit } from '@angular/core';
import { UrzednicyServiceService } from 'src/app/services/urzednicy/urzednicy-service.service';
import { Urzednicy } from '../../objects/Urzednicy';

@Component({
  selector: 'app-lista-urzednikow',
  templateUrl: './lista-urzednikow.component.html',
  styleUrls: ['./lista-urzednikow.component.css']
})
export class ListaUrzednikowComponent implements OnInit {
  listaUrzednikow: Array<Urzednicy> = [];
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 1;

  constructor(private urzednicyService: UrzednicyServiceService) { 
    this.refreshLista();
  }

  ngOnInit(): void {
  }

  refreshLista(){
    this.urzednicyService.getUrzednicy().subscribe((lista) => {
      this.listaUrzednikow = lista;

      this.collectionSize = lista.length;

      this.listaUrzednikow = this.listaUrzednikow
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    });
  }

}
