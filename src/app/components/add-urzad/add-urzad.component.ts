import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Wojewodztwa } from '../objects/Wojewodztwa';
import { WojewodztwaServiceService } from 'src/app/services/wojewodztwa/wojewodztwa-service.service';
import { Urzedy } from '../objects/Urzedy';

@Component({
  selector: 'app-add-urzad',
  templateUrl: './add-urzad.component.html',
  styleUrls: ['./add-urzad.component.css']
})
export class AddUrzadComponent implements OnInit {
  @Output() onAddUrzedy: EventEmitter<Urzedy> = new EventEmitter();
  listaWojewodztw: Wojewodztwa[] = [];
  nazwa: string;
  wojewodztwo_id: number;

  constructor(private wojewodztwaService: WojewodztwaServiceService) { }

  ngOnInit(): void {
    this.wojewodztwaService.getWojewodztwa().subscribe((wojewodztwo) => this.listaWojewodztw = wojewodztwo);
  }

  onSubmit(){
    if(!this.nazwa || !this.wojewodztwo_id) {
      alert('By dodać nowy urząd, musisz podać jego nazwę i województwo');
    } else {
      const newUrzedy = {
        id: 0,
        nazwa_urzedu: this.nazwa,
        wojewodztwo_id: this.wojewodztwo_id
      };

      this.onAddUrzedy.emit(newUrzedy);

      this.nazwa = '',
      this.wojewodztwo_id = 0;
    }

    
  }

}
