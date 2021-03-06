import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
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
  faTimes = faTimes;
  faPencilAlt = faPencilAlt;
  isKierownik: boolean = false;
  isAdministrator: boolean = false;
  isUrzednik: boolean = false;

  constructor(private aktyService: AktyServiceService, private router: Router) {
    this.refreshAkty();
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
   };

  refreshAkty() {
    this.aktyService.getAktyRozwodow().subscribe((akty) => {
      this.listaAktow = akty;
      this.collectionSize = akty.length;
    
      this.listaAktow = this.listaAktow
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }, err =>  {
      console.log(err);
      alert("Wystąpił błąd. Żądane dane są dostępne dla administratora,kierowników oraz urzędników.");
  });
  }

  addAktRozwodu(akty_rozwodu: Akty_rozwodu){
     this.aktyService.addAktRozwodu(akty_rozwodu).subscribe(resp => {
       alert("Dodano nowy akt rozwodu.");
       this.listaAktow.push(resp);
     },
       err => {
         console.log(err);
         alert("Wystąpił błąd. Spróbuj ponownie.");
       });

     console.log(akty_rozwodu);
  }

  deleteAktRozwodu(id: number){
    this.aktyService.deleteAktRozwodu(id).subscribe(resp => {
      alert("Usunięto akt rozwodu.");
      this.listaAktow = this.listaAktow.filter(f => f.id != id);
    },
      err => {
        console.log(err);
        alert("Wystąpił błąd. Spróbuj ponownie.");
      });
  }

  editAktRozwodu(akty_rozwodu: Akty_rozwodu){
    this.router.navigateByUrl('/updateAktRozwodu/' + akty_rozwodu.id);
  }

}
