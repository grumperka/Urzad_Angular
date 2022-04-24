import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KierownicyServiceService } from 'src/app/services/kierownicy/kierownicy-service.service';
import { UrzednicyServiceService } from 'src/app/services/urzednicy/urzednicy-service.service';
import { UrzedyServiceService } from 'src/app/services/urzedy/urzedy-service.service';
import { Kierownicy } from '../../objects/Kierownicy';
import { Urzad_Woj } from '../../objects/Urzad_Woj';

@Component({
  selector: 'app-edit-urzednik',
  templateUrl: './edit-urzednik.component.html',
  styleUrls: ['./edit-urzednik.component.css']
})
export class EditUrzednikComponent implements OnInit {
  id: number;
  imie: string;
  nazwisko: string;
  urzad_id: number;
  kierownik: Kierownicy;
  kierownik_id: number;
  login: string;
  listaUrzedow: Urzad_Woj[] = [];

  constructor(private urzednicyService: UrzednicyServiceService, private urzedyService: UrzedyServiceService, private kierownicyService: KierownicyServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);

      this.urzedyService.getUrzedy().subscribe((urzedy) => this.listaUrzedow = urzedy);

      this.urzednicyService.getUrzednik(this.id).subscribe(resp => {
        this.imie = resp.imie;
        this.nazwisko = resp.nazwisko;
        this.urzad_id = resp.urzad_id;
        this.kierownik_id = resp.kierownik_id;
        this.login = resp.login;

        this.kierownicyService.getKierownik(this.kierownik_id).subscribe((kierownik) => this.kierownik = kierownik);
      }, err => {
        console.log(err);
      });
    });
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

    if(!this.login) {
      errorInfo += 'Pole LOGIN nie może być puste \n';
    }


    if(errorInfo != ""){
      alert(errorInfo);
    } else {
      console.log(this.imie);
      console.log(this.nazwisko);
      console.log(this.urzad_id);

      var newUrzednik = {
        id: this.id,
        imie: this.imie,
        nazwisko: this.nazwisko,
        urzad_id: this.urzad_id,
        kierownik_id: this.kierownik_id, 
        login: this.login
      };

      this.urzednicyService.editUrzednik(newUrzednik).subscribe(resp => {
        alert("Edytowano dane urzędnika.");
      }, 
        err => {
          alert("Wystąpił błąd. Spróbuj ponownie.");
          console.log();
        });


    }
  }

}
