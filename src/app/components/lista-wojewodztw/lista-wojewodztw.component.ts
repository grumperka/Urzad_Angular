import { Component, OnInit } from '@angular/core';
import { Wojewodztwa } from '../objects/Wojewodztwa';
import { WojewodztwaServiceService } from 'src/app/services/wojewodztwa/wojewodztwa-service.service';

@Component({
  selector: 'app-lista-wojewodztw',
  templateUrl: './lista-wojewodztw.component.html',
  styleUrls: ['./lista-wojewodztw.component.css']
})
export class ListaWojewodztwComponent implements OnInit {
  listaWojewodztw: Wojewodztwa[] = [];

  constructor(private wojewodztwaService: WojewodztwaServiceService) { }

  ngOnInit(): void {
    this.wojewodztwaService.getWojewodztwa().subscribe((wojewodztwo) => this.listaWojewodztw = wojewodztwo);
  }

}
