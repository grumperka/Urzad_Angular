import { Component, OnInit } from '@angular/core';
import { AktyServiceService } from 'src/app/services/akty/akty-service.service';
import { Akty_urodzenia } from '../../objects/Akty_urodzenia';

@Component({
  selector: 'app-lista-aktow-urodzenia',
  templateUrl: './lista-aktow-urodzenia.component.html',
  styleUrls: ['./lista-aktow-urodzenia.component.css']
})
export class ListaAktowUrodzeniaComponent implements OnInit {
  listaAktow: Array<Akty_urodzenia> = [];
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 1;

  constructor(private aktyService: AktyServiceService) {
    this.refreshCountries();
   }

  ngOnInit(): void {
  }

  refreshCountries() {
    this.aktyService.getAktyUrodzenia().subscribe((akty) => {
      this.listaAktow = akty;
      this.collectionSize = akty.length;
    
      this.listaAktow = this.listaAktow
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    });
  }

}
