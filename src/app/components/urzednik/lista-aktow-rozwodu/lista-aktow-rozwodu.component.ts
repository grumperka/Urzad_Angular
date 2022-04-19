import { Component, OnInit } from '@angular/core';
import { AktyServiceService } from 'src/app/services/akty/akty-service.service';
import { Akty_rozwodu } from '../../objects/Akty_rozwodu';

@Component({
  selector: 'app-lista-aktow-rozwodu',
  templateUrl: './lista-aktow-rozwodu.component.html',
  styleUrls: ['./lista-aktow-rozwodu.component.css']
})
export class ListaAktowRozwoduComponent implements OnInit {
  listaAktow: Array<Akty_rozwodu> = [];
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 1;

  constructor(private aktyService: AktyServiceService) {
    this.refreshAkty();
   }

   ngOnInit(): void {
     
   };

  refreshAkty() {
    this.aktyService.getAktyRozwodow().subscribe((akty) => {
      this.listaAktow = akty;
      this.collectionSize = akty.length;
    
      this.listaAktow = this.listaAktow
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    });
  }

}
