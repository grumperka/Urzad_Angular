import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AktyServiceService } from 'src/app/services/akty/akty-service.service';
import { ObywateleServiceService } from 'src/app/services/obywatele/obywatele-service.service';
import { UrzednicyServiceService } from 'src/app/services/urzednicy/urzednicy-service.service';
import { Akty_urodzenia } from '../../objects/Akty_urodzenia';
import { Obywatele } from '../../objects/Obywatele';
import { Urzednicy } from '../../objects/Urzednicy';

@Component({
  selector: 'app-add-akt-urodzenia',
  templateUrl: './add-akt-urodzenia.component.html',
  styleUrls: ['./add-akt-urodzenia.component.css']
})
export class AddAktUrodzeniaComponent implements OnInit {
  id_obywatela: number;
  listaObywateli: Array<Obywatele> = [];
  obywatel_plec: string;
  id_ojca: number;
  listaOjcow: Array<Obywatele> = [];
  id_matki: number;
  listaMatek: Array<Obywatele> = [];
  id_urzednika: number | null;
  listaUrzednikow: Array<Urzednicy> = [];
  data_wydania_aktu: Date;
  @Output() onAddAktUrodzenia: EventEmitter<Akty_urodzenia> = new EventEmitter();

  constructor(private aktyService: AktyServiceService, private urzednicyService: UrzednicyServiceService,
              private obywateleService: ObywateleServiceService) { }

  ngOnInit(): void {
    this.urzednicyService.getUrzednicy().subscribe((lista) => this.listaUrzednikow = lista);
    
    this.obywateleService.getObywateleAliveWithoutAktUrodzenia().subscribe((lista) => this.listaObywateli = lista);
    this.obywateleService.getObywateleAlive().subscribe((lista) => this.listaOjcow = lista.filter(f => f.plec == "m"));
    this.obywateleService.getObywateleAlive().subscribe((lista) => this.listaMatek = lista.filter(f => f.plec == "k"));
  }

  checkValueObywatel(id_obywatela: number){
    if(id_obywatela){
      console.log("checkValueObywatel: " + id_obywatela);
      this.obywateleService.getObywatel(id_obywatela).subscribe((obywatel) => 
      {
          this.obywatel_plec = obywatel.plec;

          if(this.obywatel_plec == "m")
          {
            console.log("listaOjcow: " + this.listaOjcow.length);
            this.listaOjcow = this.listaOjcow.filter(f => f.id != id_obywatela);
            console.log("listaOjcow: " + this.listaOjcow.length);
          } 
          else if(this.obywatel_plec == "k"){
            this.listaMatek = this.listaMatek.filter(f => f.id != id_obywatela);
          }
      });
    }
  }

  checkValueO(id_ojca: number){
    if(id_ojca){
      console.log("checkValueO: " + id_ojca);
      this.listaObywateli = this.listaObywateli.filter(f => f.id != id_ojca);
    }
  }

  checkValueM(id_matki: number){
    if(id_matki){
      console.log("checkValueM: " + id_matki);
      this.listaObywateli = this.listaObywateli.filter(f => f.id != id_matki);
    }
  }

  onSubmit(){
    var errorInfo = "";

    if(!this.id_obywatela) {
      errorInfo += 'Pole OBYWATEL nie może być puste \n';
    }

    if(!this.id_ojca) {
      errorInfo += 'Pole OJCIEC nie może być puste \n';
    }

    if(!this.id_matki) {
      errorInfo += 'Pole MATKA nie może być puste \n';
    }


    if(errorInfo != ""){
      alert(errorInfo);
    } else {
    console.log("SUBMIT");

    this.id_urzednika = Number(sessionStorage.getItem("userID"));

    const newAktUrodzenia = {
      id: 0,
      id_obywatela: this.id_obywatela,
      id_ojca: this.id_ojca,
      id_matki: this.id_matki,
      id_urzedu: 0,
      id_urzednika: this.id_urzednika,
      data_wydania_aktu: new Date(),
    };

    this.onAddAktUrodzenia.emit(newAktUrodzenia);

    this.id_obywatela = 0;
    this.id_ojca = 0;
    this.id_matki = 0;
    this.id_urzednika = 0;
    
    }
  }

}
