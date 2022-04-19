import { Component, OnInit } from '@angular/core';
import { KierownicyServiceService } from 'src/app/services/kierownicy/kierownicy-service.service';
import { Kierownicy } from '../../objects/Kierownicy';

@Component({
  selector: 'app-lista-kierownikow',
  templateUrl: './lista-kierownikow.component.html',
  styleUrls: ['./lista-kierownikow.component.css']
})
export class ListaKierownikowComponent implements OnInit {
  listaKierownikow: Array<Kierownicy> = [];
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 1;

  constructor(private kierownicyService: KierownicyServiceService) { 
    this.refreshLista();
  }

  ngOnInit(): void {
  }

  refreshLista(){
    this.kierownicyService.getKierownicy().subscribe((lista) => {
      this.listaKierownikow = lista;
      this.collectionSize = lista.length;

      this.listaKierownikow = this.listaKierownikow
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    });
  }
}
