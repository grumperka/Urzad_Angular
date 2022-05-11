import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ObywateleServiceService } from 'src/app/services/obywatele/obywatele-service.service';
import { UrzednicyServiceService } from 'src/app/services/urzednicy/urzednicy-service.service';
import { Akty_slubow } from '../../objects/Akty_slubow';
import { Obywatele } from '../../objects/Obywatele';
import { Urzednicy } from '../../objects/Urzednicy';

@Component({
  selector: 'app-add-akt-slubu',
  templateUrl: './add-akt-slubu.component.html',
  styleUrls: ['./add-akt-slubu.component.css']
})
export class AddAktSlubuComponent implements OnInit {
  id_malzonka: number;
  listaObywateliM: Array<Obywatele> = [];
  id_malzonki: number;
  listaObywateliK: Array<Obywatele> = [];
  id_urzednika: number;
  listaUrzednikow: Array<Urzednicy> = [];
  id_swiadka_1: number;
  listaSwiadkowM: Array<Obywatele> = [];
  id_swiadka_2: number;
  listaSwiadkowK: Array<Obywatele> = [];
  data_wydania_aktu: Date;
  @Output() onAddAktSlubu: EventEmitter<Akty_slubow> = new EventEmitter();

  constructor(private obywateleService: ObywateleServiceService, private urzednicyService: UrzednicyServiceService) { }

  ngOnInit(): void {
    this.obywateleService.getObywateleSingle().subscribe((lista) => this.listaObywateliM = lista.filter(f => f.plec == "m"));
    this.obywateleService.getObywateleSingle().subscribe((lista) => this.listaObywateliK = lista.filter(f => f.plec == "k"));
    this.urzednicyService.getUrzednicy().subscribe((lista) => this.listaUrzednikow = lista);

    this.obywateleService.getObywateleM().subscribe((lista) => this.listaSwiadkowM = lista);
    this.obywateleService.getObywateleK().subscribe((lista) => this.listaSwiadkowK = lista);
  }

  onSubmit() {
    var errorInfo = "";

    if(!this.id_malzonka) {
      errorInfo += 'Pole MAŁŻONKA nie może być puste \n';
    }

    if(!this.id_malzonki) {
      errorInfo += 'Pole MAŁŻONKI nie może być puste \n';
    }

    if(!this.id_swiadka_1) {
      errorInfo += 'Pole ŚWIADEK 1 nie może być puste \n';
    }

    if(!this.id_swiadka_2) {
      errorInfo += 'Pole ŚWIADEK 2 nie może być puste \n';
    }

    if(errorInfo != ""){
      alert(errorInfo);
    } else {
    console.log("SUBMIT");

    this.id_urzednika = Number(sessionStorage.getItem("userID"));

    const newAktSlubu = {
      id: 0,
      id_malzonki: this.id_malzonki,
      id_malzonka: this.id_malzonka,
      id_urzednika: this.id_urzednika,
      id_urzedu: 0,
      id_swiadka_1: this.id_swiadka_1,
      id_swiadka_2: this.id_swiadka_1,
      data_wydania_aktu: new Date()
    };

    this.onAddAktSlubu.emit(newAktSlubu);

    this.id_malzonki = 0;
    this.id_malzonka = 0;
    this.id_urzednika = 0;
    this.id_swiadka_1 = 0;
    this.id_swiadka_1 = 0;
  }
  }

  checkValueM(id: number){
    if(this.id_malzonka){
      console.log("checkValueM");
      this.listaSwiadkowM = this.listaSwiadkowM.filter(f => f.id != id);
    }
  }

  checkValueK(id: number){
    if(this.id_malzonki){
      console.log("checkValueK");
      console.log(this.listaSwiadkowK);
      this.listaSwiadkowK = this.listaSwiadkowK.filter(f => f.id != id);
    }
  }

  checkValueSM(id: number){
    if(this.id_swiadka_1){
      console.log("checkValueSM");
      this.listaObywateliM = this.listaObywateliM.filter(f => f.id != id);
    }
  }

  checkValueSK(id: number){
    if(this.id_swiadka_2){
      console.log("checkValueSK");
      console.log(this.listaSwiadkowK);
      this.listaObywateliK = this.listaObywateliK.filter(f => f.id != id);
    }
  }
}
