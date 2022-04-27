import { Component, OnInit } from '@angular/core';
import { AktyServiceService } from 'src/app/services/akty/akty-service.service';
import { Akty_slubow } from '../../objects/Akty_slubow';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-aktow-slubow',
  templateUrl: './lista-aktow-slubow.component.html',
  styleUrls: ['./lista-aktow-slubow.component.css']
})
export class ListaAktowSlubowComponent implements OnInit {
  listaAktow: Array<Akty_slubow> = [];
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 1;
  faTimes = faTimes;

  constructor(private aktyService: AktyServiceService) {
    this.refreshCountries();
   }

  ngOnInit(): void {
  }

  refreshCountries() {
    this.aktyService.getAktySlubow().subscribe((akty) => {
      this.listaAktow = akty;
      this.collectionSize = akty.length;
    
      this.listaAktow = this.listaAktow
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    });
  }

  deleteAktSlubow(id: number){
    this.aktyService.deleteAktSlubu(id).subscribe(resp => {
      alert("Akt ślubu został usunięty.");
      this.listaAktow = this.listaAktow.filter(f => f.id != id);
    }, err => {
      console.log(err);
      alert("Wystąpił błąd. Spróbuj ponownie.");
    });
  }

  addAktSlubu(akt_slubu: Akty_slubow) {
    console.log("addAktSlubu");
    this.aktyService.addAktSlubu(akt_slubu).subscribe(resp => {
      alert("Akt ślubu został dodany.");
      this.listaAktow.push(resp);
    }, err => {
      console.log(err);
      alert("Wystąpił błąd. Spróbuj ponownie.");
    });
  }

}
