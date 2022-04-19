import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrzedyServiceService } from 'src/app/services/urzedy/urzedy-service.service';
import { WojewodztwaServiceService } from 'src/app/services/wojewodztwa/wojewodztwa-service.service';
import { Urzad_Woj } from '../objects/Urzad_Woj';
import { Wojewodztwa } from '../objects/Wojewodztwa';

@Component({
  selector: 'app-edit-urzad',
  templateUrl: './edit-urzad.component.html',
  styleUrls: ['./edit-urzad.component.css']
})
export class EditUrzadComponent implements OnInit {
  id: number;
  urzad: Urzad_Woj;
  listaWojewodztw: Wojewodztwa[] = [];

  constructor(private route: ActivatedRoute, private urzedyService: UrzedyServiceService,private wojewodztwaService: WojewodztwaServiceService) { }

  ngOnInit(): void {


    this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      console.log(this.id);

      this.wojewodztwaService.getWojewodztwa().subscribe((wojewodztwo) => this.listaWojewodztw = wojewodztwo);

      this.urzedyService.getUrzad(this.id).subscribe(resp => {
        this.urzad = resp;
        console.log(this.urzad);
      })
   });
  }

  onSubmit() {}

}
