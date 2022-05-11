import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AktyServiceService } from 'src/app/services/akty/akty-service.service';
import { ObywateleServiceService } from 'src/app/services/obywatele/obywatele-service.service';
import { UrzednicyServiceService } from 'src/app/services/urzednicy/urzednicy-service.service';
import { Akty_zgonu } from '../../objects/Akty_zgonu';
import { Obywatele } from '../../objects/Obywatele';
import { Urzednicy } from '../../objects/Urzednicy';

@Component({
  selector: 'app-add-akt-zgonu',
  templateUrl: './add-akt-zgonu.component.html',
  styleUrls: ['./add-akt-zgonu.component.css']
})
export class AddAktZgonuComponent implements OnInit {
  id_obywatela: number;
  listaObywateli: Array<Obywatele> = [];
  id_urzednika: number;
  data_wydania_aktu: Date;
  listaUrzednikow: Array<Urzednicy> = [];
  @Output() onAddAktZgonu: EventEmitter<Akty_zgonu> = new EventEmitter();

  constructor(private aktyService: AktyServiceService, private urzednicyService: UrzednicyServiceService,
              private obywateleService: ObywateleServiceService) { }

  ngOnInit(): void {
    this.urzednicyService.getUrzednicy().subscribe((lista) => this.listaUrzednikow = lista);

    this.obywateleService.getObywateleAlive().subscribe((lista) => this.listaObywateli = lista);
  }

  onSubmit(){
    var errorInfo = "";

    if(!this.id_obywatela) {
      errorInfo += 'Pole OBYWATEL nie może być puste \n';
    }

    if(errorInfo != ""){
      alert(errorInfo);
    } else {
    console.log("SUBMIT");

    this.id_urzednika = Number(sessionStorage.getItem("userID"));

    const newAktUrodzenia = {
      id: 0,
      id_obywatela: this.id_obywatela,
      id_urzedu: 0,
      id_urzednika: this.id_urzednika,
      data_wydania_aktu: new Date(),
    };

    this.onAddAktZgonu.emit(newAktUrodzenia);

    this.id_obywatela = 0;
    this.id_urzednika = 0;
    }
  }

}
