import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WojewodztwaServiceService } from 'src/app/services/wojewodztwa/wojewodztwa-service.service';
import { Obywatele } from '../../objects/Obywatele';
import { Wojewodztwa } from '../../objects/Wojewodztwa';

@Component({
  selector: 'app-add-obywatel',
  templateUrl: './add-obywatel.component.html',
  styleUrls: ['./add-obywatel.component.css']
})
export class AddObywatelComponent implements OnInit {
  imie: string;
  nazwisko: string;
  nazwisko_rodowe: string;
  pesel: number;
  wojewodztwo_id: number;
  plec: string;
  listaWojewodztw: Wojewodztwa[] = [];
  @Output() onAddObywatel: EventEmitter<Obywatele> = new EventEmitter();

  constructor(private wojewodztwaService: WojewodztwaServiceService) { }

  ngOnInit(): void {
    this.wojewodztwaService.getWojewodztwa().subscribe((wojewodztwo) => this.listaWojewodztw = wojewodztwo);
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
        id: 0,
        imie: this.imie,
        nazwisko: this.nazwisko,
        nazwisko_rodowe: this.nazwisko_rodowe,
        pesel: this.pesel,
        wojewodztwo_id: this.wojewodztwo_id,
        plec: this.plec
      };

      this.onAddObywatel.emit(newObywatel);

      this.imie = "";
      this.nazwisko = "";
      this.nazwisko_rodowe = "";
      this.pesel = 0;
      this.wojewodztwo_id = 0;
      this.plec = "";
    }



  }

}
