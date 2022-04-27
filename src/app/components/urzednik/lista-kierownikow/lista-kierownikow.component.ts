import { Component, OnInit } from '@angular/core';
import { KierownicyServiceService } from 'src/app/services/kierownicy/kierownicy-service.service';
import { Kierownicy } from '../../objects/Kierownicy';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-kierownikow',
  templateUrl: './lista-kierownikow.component.html',
  styleUrls: ['./lista-kierownikow.component.css']
})
export class ListaKierownikowComponent implements OnInit {
  listaKierownikow: Array<Kierownicy> = [];
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 1;
  faTimes = faTimes;
  faPencilAlt = faPencilAlt;

  constructor(private kierownicyService: KierownicyServiceService, private router: Router) { 
    this.refreshLista();
  }

  ngOnInit(): void {
  }

  refreshLista(){
    this.kierownicyService.getKierownicy().subscribe((lista) => {
      this.listaKierownikow = lista;
      this.collectionSize = lista.length;

      this.listaKierownikow = this.listaKierownikow
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    });
  }

  addKierownik(kierownik: Kierownicy){
    this.kierownicyService.addKierownik(kierownik).subscribe(resp => {
      alert('Dodano nowego kierownika.');
      this.listaKierownikow.push(resp);
      }
      ,err => {
        alert('Wystąpił błąd. Spróbuj ponownie.');
      });
  }

  deleteKierownik(id: number){
    this.kierownicyService.deleteKierownik(id).subscribe(res => {
      alert('Usunięto kierownika.');
      this.listaKierownikow = this.listaKierownikow.filter(f => f.id != id);
      }
      ,err => {
        alert('Wystąpił błąd. Spróbuj ponownie.');
      });
  }

  editKierownik(kierownik: Kierownicy){
    this.router.navigateByUrl('/updateKierownik/' + kierownik.id);
  }
}
