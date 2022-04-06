import { Component, OnInit } from '@angular/core';
import { Powody_rozwodu } from '../objects/Powody_rozwodu';
import { PowodyRozwoduServiceService } from 'src/app/services/powodyRozwodu/powody-rozwodu-service.service';

@Component({
  selector: 'app-lista-powodow-rozwodu',
  templateUrl: './lista-powodow-rozwodu.component.html',
  styleUrls: ['./lista-powodow-rozwodu.component.css']
})
export class ListaPowodowRozwoduComponent implements OnInit {
  listaPowodow: Powody_rozwodu[] = [];

  constructor(private powodyRozowduS: PowodyRozwoduServiceService) { }

  ngOnInit(): void {
    this.powodyRozowduS.getPowodyRozwodu().subscribe((powody) => this.listaPowodow = powody);
  }

}
