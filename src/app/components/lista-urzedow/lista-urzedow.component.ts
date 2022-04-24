import { Component, OnInit, Output } from '@angular/core';
import { Urzedy } from '../objects/Urzedy';
import { UrzedyServiceService } from 'src/app/services/urzedy/urzedy-service.service';
import { Wojewodztwa } from '../objects/Wojewodztwa';
import { Urzad_Woj } from '../objects/Urzad_Woj';
import { WojewodztwaServiceService } from 'src/app/services/wojewodztwa/wojewodztwa-service.service';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-urzedow',
  templateUrl: './lista-urzedow.component.html',
  styleUrls: ['./lista-urzedow.component.css']
})
export class ListaUrzedowComponent implements OnInit {
  listaUrzad_Woj: Urzad_Woj[] = [];
  faTimes = faTimes;
  faPencilAlt = faPencilAlt;

  constructor(private urzedyService: UrzedyServiceService, private router: Router) { }

  ngOnInit(): void {
    this.urzedyService.getUrzedy().subscribe((urzedy) => this.listaUrzad_Woj = urzedy);
  }

  addUrzedy(urzedy: Urzedy){
    this.urzedyService.addUrzedy(urzedy).subscribe(res => {
      console.log("RESPONSE: " + res);
      this.listaUrzad_Woj.push(<Urzad_Woj>res);
    },
    err => { console.log("ERROR: " + err); }
    );
    }

  deleteUrzedy(urzad: Urzedy){
    this.urzedyService.deleteUrzedy(urzad).subscribe(res => {
      console.log("RESPONSE: " + res);
      this.listaUrzad_Woj = this.listaUrzad_Woj.filter(f => f.id != urzad.id);
    },
    err => { console.log("ERROR: " + err); }
    );

  }

  editUrzedy(urzad: Urzedy){
    this.router.navigateByUrl('/updateUrzad/' + urzad.id);
  }

}
