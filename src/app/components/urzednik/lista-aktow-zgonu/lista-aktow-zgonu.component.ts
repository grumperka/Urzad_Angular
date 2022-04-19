import { Component, OnInit } from '@angular/core';
import { AktyServiceService } from 'src/app/services/akty/akty-service.service';
import { Akty_zgonu } from '../../objects/Akty_zgonu';

@Component({
  selector: 'app-lista-aktow-zgonu',
  templateUrl: './lista-aktow-zgonu.component.html',
  styleUrls: ['./lista-aktow-zgonu.component.css']
})
export class ListaAktowZgonuComponent implements OnInit {
  listaAktow: Array<Akty_zgonu> = [];
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 1;

  constructor(private aktyService: AktyServiceService) {
    this.refreshCountries();
   }

  ngOnInit(): void {
  }

  refreshCountries() {
    this.aktyService.getAktyZgonow().subscribe((akty) => {
      this.listaAktow = akty;
      this.collectionSize = akty.length;
    
      this.listaAktow = this.listaAktow
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    });
  }

}
