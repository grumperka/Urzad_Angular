import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AktyServiceService } from 'src/app/services/akty/akty-service.service';
import { PowodyRozwoduServiceService } from 'src/app/services/powodyRozwodu/powody-rozwodu-service.service';
import { Powody_rozwodu } from '../../objects/Powody_rozwodu';

@Component({
  selector: 'app-edit-akt-rozwodu',
  templateUrl: './edit-akt-rozwodu.component.html',
  styleUrls: ['./edit-akt-rozwodu.component.css']
})
export class EditAktRozwoduComponent implements OnInit {
  id: number;
  z_orzekaniem_winy_T_N: number;
  id_powodu_glownego: number;
  listaPowodow: Array<Powody_rozwodu> = [];
  czy_wylacznie_T_N: number;

  constructor(private route: ActivatedRoute, private powodyService: PowodyRozwoduServiceService, private aktyService: AktyServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      console.log(this.id);

      this.powodyService.getPowodyRozwodu().subscribe((lista) => this.listaPowodow = lista);

      this.aktyService.getAktRozwodu(this.id).subscribe(resp => {
        this.id = resp.id;
        this.z_orzekaniem_winy_T_N = resp.z_orzekaniem_winy_T_N;
        this.id_powodu_glownego = resp.id_powodu_glownego;
        this.czy_wylacznie_T_N = resp.czy_wylacznie_T_N;
      });
    });
  }

  onSubmit(){
    var errorInfo = "";

    if(this.z_orzekaniem_winy_T_N<0 && this.z_orzekaniem_winy_T_N>1) {
      errorInfo += 'Pole Z ORZEKANIEM O WINIE nie może być puste \n';
    }

    if(!this.id_powodu_glownego) {
      errorInfo += 'Pole POWÓD ROZWODU nie może być puste \n';
    }

    if(this.czy_wylacznie_T_N<0  && this.czy_wylacznie_T_N>1) {
      errorInfo += 'Pole CZY WYŁĄCZNIE nie może być puste \n';
    }

    if(errorInfo != ""){
      alert(errorInfo);
    } else {
    console.log("SUBMIT");

    const editAktRozwodu = {
      id: this.id,
      id_rozwodnika: 0,
      id_rozwodniczki: 0,
      id_urzedu: 0,
      id_urzednika: 0,
      data_slubu: new Date(),
      data_wydania_aktu_rozwodu: new Date(),
      z_orzekaniem_winy_T_N: this.z_orzekaniem_winy_T_N,
      id_powodu_glownego: this.id_powodu_glownego,
      czy_wylacznie_T_N: this.czy_wylacznie_T_N
    };

    this.aktyService.editAktRozwodu(editAktRozwodu).subscribe(resp => {
      alert("Akt rozwodu został edytowany.");
    }, err => {
      console.log(err);
      alert("Wystąpił błąd. Spróbuj podobnie.");
    });
  
    }
  }

}
