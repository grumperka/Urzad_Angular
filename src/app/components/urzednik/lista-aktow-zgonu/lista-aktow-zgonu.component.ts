import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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
    this.aktyService.getAktyZgonow().subscribe((akty) => {
      this.listaAktow = akty;
      this.collectionSize = akty.length;
    
      this.listaAktow = this.listaAktow
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    });
  }

  deleteAktZgonu(id: number){
    this.aktyService.deleteAktZgonu(id).subscribe(resp => {
      alert("Akt zgonu został usunięty.");
      this.listaAktow = this.listaAktow.filter(f => f.id != id);
    }, err => {
      console.log(err);
      alert("Wystąpił błąd. Spróbuj ponownie.");
    });
  }

  addAktZgonu(akt_zgonu: Akty_zgonu){
    this.aktyService.addAktZgonow(akt_zgonu).subscribe(resp => {
      alert("Akt zgonu został dodany.");
      this.listaAktow.push(resp);
    }, err => {
      console.log(err);
      alert("Wystąpił błąd. Spróbuj ponownie.");
    });
  }

}
