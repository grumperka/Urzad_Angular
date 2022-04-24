import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UrzedyServiceService } from 'src/app/services/urzedy/urzedy-service.service';
import { Kierownicy } from '../../objects/Kierownicy';
import { Urzedy } from '../../objects/Urzedy';

@Component({
  selector: 'app-add-kierownik',
  templateUrl: './add-kierownik.component.html',
  styleUrls: ['./add-kierownik.component.css']
})
export class AddKierownikComponent implements OnInit {
  imie: string;
  nazwisko: string;
  urzad_id: number;
  czy_zastepca_T_N: number;
  listaUrzedow: Urzedy[] = [];
  @Output() onAddKierownik: EventEmitter<Kierownicy> = new EventEmitter();

  constructor(private urzedyService: UrzedyServiceService) { }

  ngOnInit(): void {
    this.urzedyService.getUrzedy().subscribe((urzedy) => this.listaUrzedow = urzedy);
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

    if(!this.czy_zastepca_T_N) {
      errorInfo += 'Pole CZY ZASTĘPCA nie może być puste \n';
    }


    if(errorInfo != ""){
      alert(errorInfo);
    } else {
      console.log(this.imie);
      console.log(this.nazwisko);
      console.log(this.urzad_id);
      console.log(this.czy_zastepca_T_N);

      const newKierownik = {
        id: 0,
        imie: this.imie,
        nazwisko: this.nazwisko,
        urzad_id: this.urzad_id,
        czy_zastepca_T_N: this.czy_zastepca_T_N,
        login: "login"
      };

      this.onAddKierownik.emit(newKierownik);

      this.imie = "";
      this.nazwisko = "";
      this.urzad_id = 0;
      this.czy_zastepca_T_N = 0;
    }

  }

}
