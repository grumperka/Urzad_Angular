import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ObywateleServiceService } from 'src/app/services/obywatele/obywatele-service.service';
import { PowodyRozwoduServiceService } from 'src/app/services/powodyRozwodu/powody-rozwodu-service.service';
import { UrzednicyServiceService } from 'src/app/services/urzednicy/urzednicy-service.service';
import { UrzedyServiceService } from 'src/app/services/urzedy/urzedy-service.service';
import { Obywatele } from '../../objects/Obywatele';
import { Powody_rozwodu } from '../../objects/Powody_rozwodu';
import { Urzednicy } from '../../objects/Urzednicy';
import { Urzedy } from '../../objects/Urzedy';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AktyServiceService } from 'src/app/services/akty/akty-service.service';
import { Akty_rozwodu } from '../../objects/Akty_rozwodu';

@Component({
  selector: 'app-add-akt-rozwodu',
  templateUrl: './add-akt-rozwodu.component.html',
  styleUrls: ['./add-akt-rozwodu.component.css']
})
export class AddAktRozwoduComponent implements OnInit {
  id_rozwodnika: number;
  id_rozwodniczki: number;
  listaObywateliM: Array<Obywatele> = [];
  listaObywateliK: Array<Obywatele> = [];
  id_urzedu: number;
  listaUrzedow: Array<Urzedy> = [];
  id_urzednika: number;
  listaUrzednikow: Array<Urzednicy> = [];
  data_slubu: NgbDateStruct;
  data_wydania_aktu_rozwodu: Date;
  z_orzekaniem_winy_T_N: number;
  id_powodu_glownego: number;
  listaPowodow: Array<Powody_rozwodu> = [];
  czy_wylacznie_T_N: number;
  @Output() onAddAktRozwodu: EventEmitter<Akty_rozwodu> = new EventEmitter();

  constructor(private obywateleService: ObywateleServiceService, private urzedyService: UrzedyServiceService,
              private urzednicyService: UrzednicyServiceService, private powodyService: PowodyRozwoduServiceService,
              private aktyService: AktyServiceService) { }

  ngOnInit(): void {
    this.obywateleService.getObywateleM().subscribe((lista) => this.listaObywateliM = lista);
    this.obywateleService.getObywateleK().subscribe((lista) => this.listaObywateliK = lista);

    this.urzedyService.getUrzedy().subscribe((lista) => this.listaUrzedow = lista);

    this.urzednicyService.getUrzednicy().subscribe((lista) => this.listaUrzednikow = lista);

    this.powodyService.getPowodyRozwodu().subscribe((lista) => this.listaPowodow = lista);
  }

  onSubmit() {

    var errorInfo = "";

    if(!this.id_rozwodnika) {
      errorInfo += 'Pole ROZWODNIK nie może być puste \n';
    }

    if(!this.id_rozwodniczki) {
      errorInfo += 'Pole ROZWODNICZKA nie może być puste \n';
    }

    if(!this.data_slubu) {
      errorInfo += 'Pole DATA ŚLUBU nie może być puste \n';
    }

    if(!this.z_orzekaniem_winy_T_N) {
      errorInfo += 'Pole Z ORZEKANIEM O WINIE nie może być puste \n';
    }

    if(!this.id_powodu_glownego) {
      errorInfo += 'Pole POWÓD ROZWODU nie może być puste \n';
    }

    if(!this.czy_wylacznie_T_N) {
      errorInfo += 'Pole CZY WYŁĄCZNIE nie może być puste \n';
    }

    if(errorInfo != ""){
      alert(errorInfo);
    } else {
    console.log("SUBMIT");

    this.id_urzednika = Number(sessionStorage.getItem("userID"));

    const newAktRozwodu = {
      id: 0,
      id_rozwodnika: this.id_rozwodnika,
      id_rozwodniczki: this.id_rozwodniczki,
      id_urzedu: 0,
      id_urzednika: this.id_urzednika,
      data_slubu: new Date(this.data_slubu.year, this.data_slubu.month, this.data_slubu.day, 12),
      data_wydania_aktu_rozwodu: new Date(),
      z_orzekaniem_winy_T_N: this.z_orzekaniem_winy_T_N,
      id_powodu_glownego: this.id_powodu_glownego,
      czy_wylacznie_T_N: this.czy_wylacznie_T_N
    };

    this.onAddAktRozwodu.emit(newAktRozwodu);

    this.id_rozwodnika = 0;
    this.id_rozwodniczki = 0;
    this.id_urzednika = 0;
    this.z_orzekaniem_winy_T_N = 0;
    this.id_powodu_glownego = 0;
    this.czy_wylacznie_T_N = 0;
    
    }
  }

  checkValueM(id_rozwodnika: number){
    if(id_rozwodnika && !this.id_rozwodniczki){
      this.obywateleService.getObywateleRozwodniczki(id_rozwodnika).subscribe((lista) => this.listaObywateliK = lista);
    }
  }

  checkValueK(id_rozwodniczki: number){
    if(id_rozwodniczki && !this.id_rozwodnika){
      this.obywateleService.getObywateleRozwodnikow(id_rozwodniczki).subscribe((lista) => this.listaObywateliM = lista);
    }
  }

}
