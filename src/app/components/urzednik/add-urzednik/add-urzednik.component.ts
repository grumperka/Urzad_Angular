import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { KierownicyServiceService } from 'src/app/services/kierownicy/kierownicy-service.service';
import { UrzednicyServiceService } from 'src/app/services/urzednicy/urzednicy-service.service';
import { UrzedyServiceService } from 'src/app/services/urzedy/urzedy-service.service';
import { Kierownicy } from '../../objects/Kierownicy';
import { Kierownicy_Urzad } from '../../objects/Kierownicy_Urzad';
import { Urzednicy } from '../../objects/Urzednicy';
import { Urzedy } from '../../objects/Urzedy';

@Component({
  selector: 'app-add-urzednik',
  templateUrl: './add-urzednik.component.html',
  styleUrls: ['./add-urzednik.component.css']
})
export class AddUrzednikComponent implements OnInit {
  imie: string;
  nazwisko: string;
  urzad_id: number;
  //kierownik_id: number;
  listaUrzedow: Urzedy[] = [];
  @Output() onAddUrzednicy: EventEmitter<Urzednicy> = new EventEmitter();

  constructor(private urzedyService: UrzedyServiceService, private urzednicyService: UrzednicyServiceService) { }

  ngOnInit(): void {
    this.urzedyService.getUrzedy().subscribe((urzedy) => this.listaUrzedow = urzedy);
    //this.kierownicyService.getKierownicy_Urzad().subscribe((kierownicy) => this.listaKierownikow = kierownicy);
  }

  onSubmit(){
    var errorInfo = "";

    if(!this.imie) {
      errorInfo += 'Pole IMIĘ nie może być puste \n';
    }

    if(!this.nazwisko) {
      errorInfo += 'Pole NAZWISKO nie może być puste \n';
    }

    if(!this.urzad_id) {
      errorInfo += 'Pole URZĄD nie może być puste \n';
    }


    if(errorInfo != ""){
      alert(errorInfo);
    } else {
      console.log(this.imie);
      console.log(this.nazwisko);
      console.log(this.urzad_id);

      var newUrzednik = {
        id: 0,
        imie: this.imie,
        nazwisko: this.nazwisko,
        urzad_id: this.urzad_id,
        kierownik_id: 0, 
        login: "login"
      };

      this.onAddUrzednicy.emit(newUrzednik);

      this.imie = "";
      this.nazwisko = "";
      this.urzad_id = 0;

    }



  }

}
