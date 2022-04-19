import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrzedyServiceService } from 'src/app/services/urzedy/urzedy-service.service';
import { WojewodztwaServiceService } from 'src/app/services/wojewodztwa/wojewodztwa-service.service';
import { Urzedy } from '../objects/Urzedy';
import { Wojewodztwa } from '../objects/Wojewodztwa';

@Component({
  selector: 'app-edit-urzad',
  templateUrl: './edit-urzad.component.html',
  styleUrls: ['./edit-urzad.component.css']
})
export class EditUrzadComponent implements OnInit {
  id: number;
  listaWojewodztw: Wojewodztwa[] = [];
  nazwa: string;
  wojewodztwo_id: number;

  constructor(private route: ActivatedRoute, private urzedyService: UrzedyServiceService, private wojewodztwaService: WojewodztwaServiceService) { }

  ngOnInit(): void {


    this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      console.log(this.id);

      this.wojewodztwaService.getWojewodztwa().subscribe((wojewodztwo) => this.listaWojewodztw = wojewodztwo);

      this.urzedyService.getUrzad(this.id).subscribe(resp => {
        this.id = resp.id;
        this.nazwa = resp.nazwa_urzedu;
        this.wojewodztwo_id = resp.wojewodztwo_id;
      })
    });
  }

  onSubmit() {
    if (!this.nazwa || !this.wojewodztwo_id) {
      alert('By edytować urząd, musisz podać jego nazwę i województwo');
    } else {
      const editUrzedy = {
        id: this.id,
        nazwa_urzedu: this.nazwa,
        wojewodztwo_id: this.wojewodztwo_id
      };

      console.log(editUrzedy);

      this.urzedyService.editUrzedy(this.id, editUrzedy).subscribe(res => {
        console.log("RESPONSE: " + res);
        alert('Edytowano dane urzedu');
      },
        err => {
          console.log("ERROR: " + err);
          alert('Wystąpił błąd. Proszę spróbować ponownie.');
        }
      );
    }


  }

}
