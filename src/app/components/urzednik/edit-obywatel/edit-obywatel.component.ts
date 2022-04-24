import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObywateleServiceService } from 'src/app/services/obywatele/obywatele-service.service';
import { WojewodztwaServiceService } from 'src/app/services/wojewodztwa/wojewodztwa-service.service';
import { Wojewodztwa } from '../../objects/Wojewodztwa';

@Component({
  selector: 'app-edit-obywatel',
  templateUrl: './edit-obywatel.component.html',
  styleUrls: ['./edit-obywatel.component.css']
})
export class EditObywatelComponent implements OnInit {
  id: number;
  imie: string;
  nazwisko: string;
  nazwisko_rodowe: string;
  pesel: number;
  wojewodztwo_id: number;
  plec: string;
  listaWojewodztw: Wojewodztwa[] = [];
  

  constructor(private route: ActivatedRoute, private obywateleService: ObywateleServiceService, private wojewodztwaService: WojewodztwaServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      console.log(this.id);

      this.wojewodztwaService.getWojewodztwa().subscribe((wojewodztwo) => this.listaWojewodztw = wojewodztwo);

      this.obywateleService.getObywatel(this.id).subscribe(resp => {
        this.id = resp.id;
        this.imie = resp.imie;
        this.nazwisko = resp.nazwisko;
        this.nazwisko_rodowe = resp.nazwisko_rodowe;
        this.pesel = resp.pesel;
        this.wojewodztwo_id = resp.wojewodztwo_id;
        this.plec = resp.plec;
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

    if(!this.nazwisko_rodowe) {
      errorInfo += 'Pole NAZWISKO RODOWE nie może być puste \n';
    }

    if(!this.pesel) {
      errorInfo += 'Pole PESEL nie może być puste \n';
    }

    if(!this.wojewodztwo_id) {
      errorInfo += 'Pole WOJEWÓDZTWO nie może być puste \n';
    }

    if(!this.plec) {
      errorInfo += 'Pole PŁEĆ nie może być puste \n';
    }

    if(errorInfo != ""){
      alert(errorInfo);
    } else {
      console.log(this.imie);
      console.log(this.nazwisko);
      console.log(this.nazwisko_rodowe);
      console.log(this.pesel);
      console.log(this.wojewodztwo_id);
      console.log(this.plec);

      const newObywatel = {
        id: this.id,
        imie: this.imie,
        nazwisko: this.nazwisko,
        nazwisko_rodowe: this.nazwisko_rodowe,
        pesel: this.pesel,
        wojewodztwo_id: this.wojewodztwo_id,
        plec: this.plec
      };

      this.obywateleService.editObywatel(newObywatel).subscribe(resp => {
        alert("Edytowano dane obywatela.");
      },
        err => {
          alert("Wystąpił błąd. Spróbuj ponownie.");
        });

    }
  }

}
