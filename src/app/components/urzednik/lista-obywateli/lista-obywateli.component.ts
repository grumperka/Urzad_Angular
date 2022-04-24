import { Component, OnInit } from '@angular/core';
import { ObywateleServiceService } from 'src/app/services/obywatele/obywatele-service.service';
import { Obywatele } from '../../objects/Obywatele';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-obywateli',
  templateUrl: './lista-obywateli.component.html',
  styleUrls: ['./lista-obywateli.component.css']
})
export class ListaObywateliComponent implements OnInit {
  listaObywateli: Array<Obywatele> = [];
  page: number = 1;
  pageSize: number = 30;
  collectionSize: number = 1;
  faTimes = faTimes;
  faPencilAlt = faPencilAlt;

  constructor(private obywateleService: ObywateleServiceService, private router: Router) { 
    this.refreshLista();
  }

  ngOnInit(): void {
  }

  refreshLista(){
    this.obywateleService.getObywatele().subscribe((lista) => {
      this.listaObywateli = lista;
      this.collectionSize = lista.length;

      this.listaObywateli = this.listaObywateli
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    });
  }

  addObywatel(obywatel: Obywatele){
    this.obywateleService.addObywatel(obywatel).subscribe(res => {
      alert('Dodano nowego obywatela.');
    }, err => {
      alert('Wystąpił błąd. Spróbuj podobnie.');
    });
  }

  editObywatel(obywatel: Obywatele){
    this.router.navigateByUrl('/updateObywatel/' + obywatel.id);
  }
}
