import { Component, OnInit } from '@angular/core';
import { Urzedy } from '../objects/Urzedy';
import { UrzedyServiceService } from 'src/app/services/urzedy/urzedy-service.service';
import { Wojewodztwa } from '../objects/Wojewodztwa';
import { Urzad_Woj } from '../objects/Urzad_Woj';
import { WojewodztwaServiceService } from 'src/app/services/wojewodztwa/wojewodztwa-service.service';

@Component({
  selector: 'app-lista-urzedow',
  templateUrl: './lista-urzedow.component.html',
  styleUrls: ['./lista-urzedow.component.css']
})
export class ListaUrzedowComponent implements OnInit {
  listaUrzad_Woj: Urzad_Woj[] = [];

  constructor(private urzedyService: UrzedyServiceService) { }

  ngOnInit(): void {
    this.urzedyService.getUrzedy().subscribe((urzedy) => this.listaUrzad_Woj = urzedy);
  }

  addUrzedy(urzedy: Urzedy){
    this.urzedyService.addUrzedy(urzedy);
    }

}
