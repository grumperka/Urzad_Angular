import { Component, OnInit } from '@angular/core';
import { UrzednicyServiceService } from 'src/app/services/urzednicy/urzednicy-service.service';
import { Urzednicy } from '../../objects/Urzednicy';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-urzednikow',
  templateUrl: './lista-urzednikow.component.html',
  styleUrls: ['./lista-urzednikow.component.css']
})
export class ListaUrzednikowComponent implements OnInit {
  listaUrzednikow: Array<Urzednicy> = [];
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 1;
  faTimes = faTimes;
  faPencilAlt = faPencilAlt;

  constructor(private urzednicyService: UrzednicyServiceService, private router: Router) { 
    this.refreshLista();
  }

  ngOnInit(): void {
  }

  refreshLista(){
    this.urzednicyService.getUrzednicy().subscribe((lista) => {
      this.listaUrzednikow = lista;

      this.collectionSize = lista.length;

      this.listaUrzednikow = this.listaUrzednikow
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    });
  }

  addUrzednicy(urzednik: Urzednicy){
    this.urzednicyService.addUrzednik(urzednik).subscribe(resp => {
        alert('Dodano nowego urzędnika.');
        this.listaUrzednikow.push(resp);
    }
    , err => {
      console.log(err);
      alert('Wystąpił błąd. Spróbuj ponownie.');
    });
  }

  editUrzednik(urzednik: Urzednicy){
    this.router.navigateByUrl('/updateUrzednik/' + urzednik.id);
  }

  deleteUrzednik(id: number){
    this.urzednicyService.deleteUrzednik(id).subscribe(res => {
      alert('Usunięto kierownika.');
      this.listaUrzednikow = this.listaUrzednikow.filter(f => f.id != id);
      }
      ,err => {
        alert('Wystąpił błąd. Spróbuj ponownie.');
      });
  }

}
