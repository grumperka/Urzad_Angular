import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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
  faTimes = faTimes;
  isKierownik: boolean = false;
  isAdministrator: boolean = false;
  isUrzednik: boolean = false;

  constructor(private aktyService: AktyServiceService) {
    this.refreshCountries();
   }

  ngOnInit(): void {
    if(sessionStorage.getItem("rola") == "kierownik")
    {
      this.isKierownik = true;
    }  
    else if(sessionStorage.getItem("rola") == "administrator")
    {
      this.isAdministrator = true;
    }
    else if(sessionStorage.getItem("rola") == "urzednik")
    {
      this.isUrzednik = true;
    }
  }

  refreshCountries() {
    this.aktyService.getAktyUrodzenia().subscribe((akty) => {
      this.listaAktow = akty;
      this.collectionSize = akty.length;
    
      this.listaAktow = this.listaAktow
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }, err =>  {
      console.log(err);
      alert("Wystąpił błąd. Żądane dane są dostępne dla administratora,kierowników oraz urzędników.");
    });
  }

  deleteAktUrodzenia(id: number){
    this.aktyService.deleteAktUrodzenia(id).subscribe(resp => {
      alert("Akt urodzenia został usunięty.");
      this.listaAktow = this.listaAktow.filter(f => f.id != id);
    }, err => {
      console.log(err);
      alert("Wystąpił błąd. Spróbuj ponownie.");
    });
  }

  addAktUrodzenia(akt_urodzenia: Akty_urodzenia){
    this.aktyService.addAktUrodzenia(akt_urodzenia).subscribe(resp => {
      alert("Dodano nowy akt urodzenia.");
      this.listaAktow.push(resp);
    },
      err => {
        console.log(err);
        alert("Wystąpił błąd. Spróbuj ponownie.");
      });

 }

}
