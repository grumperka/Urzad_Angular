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

  constructor(private aktyService: AktyServiceService, private router: Router) {
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

  addAktRozwodu(akty_rozwodu: Akty_rozwodu){
     this.aktyService.addAktyRozwodu(akty_rozwodu).subscribe(resp => {
       alert("Dodano nowy akt rozwodu.");
       this.listaAktow.push(akty_rozwodu);
     },
       err => {
         console.log(err);
         alert("Wystąpił błąd. Spróbuj ponownie.");
       });

     console.log(akty_rozwodu);
  }

  deleteAktRozwodu(id: number){
    this.aktyService.deleteAktyRozwodu(id).subscribe(resp => {
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
