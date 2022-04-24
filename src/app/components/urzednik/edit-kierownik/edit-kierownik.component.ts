import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KierownicyServiceService } from 'src/app/services/kierownicy/kierownicy-service.service';
import { UrzedyServiceService } from 'src/app/services/urzedy/urzedy-service.service';
import { Urzad_Woj } from '../../objects/Urzad_Woj';
import { Urzedy } from '../../objects/Urzedy';

@Component({
  selector: 'app-edit-kierownik',
  templateUrl: './edit-kierownik.component.html',
  styleUrls: ['./edit-kierownik.component.css']
})
export class EditKierownikComponent implements OnInit {
  id: number;
  imie: string;
  nazwisko: string;
  urzad_id: number;
  czy_zastepca_T_N: number;
  login: string;
  listaUrzedow: Urzad_Woj[] = [];

  constructor(private kierownicyService: KierownicyServiceService, private urzedyService: UrzedyServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      console.log(this.id);

      this.urzedyService.getUrzedy().subscribe((urzedy) => this.listaUrzedow = urzedy);

      this.kierownicyService.getKierownik(this.id).subscribe(resp => {
        this.id = resp.id;
        this.imie = resp.imie;
        this.nazwisko = resp.nazwisko;
        this.urzad_id = resp.urzad_id;
        this.czy_zastepca_T_N = resp.czy_zastepca_T_N;
        this.login = resp.login;
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

    console.log(this.czy_zastepca_T_N);

    if(this.czy_zastepca_T_N > 2 && this.czy_zastepca_T_N < 0) {
      errorInfo += 'Pole CZY ZASTĘPCA nie może być puste \n';
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
      console.log(this.czy_zastepca_T_N);
      console.log(this.login);

      const newKierownik = {
        id: this.id,
        imie: this.imie,
        nazwisko: this.nazwisko,
        urzad_id: this.urzad_id,
        czy_zastepca_T_N: this.czy_zastepca_T_N,
        login: this.login
      };

      this.kierownicyService.editKierownik(newKierownik).subscribe(resp => {
        alert("Edytowano dane kierownika.");
      },
        err => {
          alert("Wystąpił błąd. Spróbuj ponownie.");
        });

    }
  }

}
