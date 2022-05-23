import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Akty_rozwodu } from 'src/app/components/objects/Akty_rozwodu';
import { Observable, of } from 'rxjs';
import { Akty_urodzenia } from 'src/app/components/objects/Akty_urodzenia';
import { Akty_slubow } from 'src/app/components/objects/Akty_slubow';
import { Akty_zgonu } from 'src/app/components/objects/Akty_zgonu';
import { HeaderServiceService } from '../header-service.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AktyServiceService {
  private apiUrlUrodzenia = 'https://localhost:7171/api/Akty_urodzenia';
  private apiUrlSlubow = 'https://localhost:7171/api/Akty_slubow';
  private apiUrlRozwodow = 'https://localhost:7171/api/Akty_rozwodu';
  private apiUrlZgonow = 'https://localhost:7171/api/Akty_zgonu';

  constructor(private http: HttpClient, private headerService: HeaderServiceService) { }

  getAktyUrodzenia(): Observable<Akty_urodzenia[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_urodzenia[]>(this.apiUrlUrodzenia, { headers: header });
  }

  getAktySlubow(): Observable<Akty_slubow[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_slubow[]>(this.apiUrlSlubow, { headers: header });
  }

  getAktyRozwodow(): Observable<Akty_rozwodu[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_rozwodu[]>(this.apiUrlRozwodow, { headers: header });
  }

  getAktRozwodu(id: number): Observable<Akty_rozwodu> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_rozwodu>(this.apiUrlRozwodow + "/" + id, { headers: header });
  }

  getAktyZgonow(): Observable<Akty_zgonu[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_zgonu[]>(this.apiUrlZgonow, { headers: header });
  }

  //////////////////////////
  
  addAktRozwodu(akty_rozwodu: Akty_rozwodu){
    var header = this.headerService.getHeader();
    return this.http.post<Akty_rozwodu>(this.apiUrlRozwodow, akty_rozwodu, { headers: header });
  }

  deleteAktRozwodu(id: number){
    var header = this.headerService.getHeader();
    return this.http.delete<Akty_rozwodu>(this.apiUrlRozwodow + "/" + id, { headers: header });
  }

  editAktRozwodu(akty_rozwodu: Akty_rozwodu){
    var header = this.headerService.getHeader();
    return this.http.put<Akty_rozwodu>(this.apiUrlRozwodow + "/" + akty_rozwodu.id, akty_rozwodu, { headers: header });
  }
  
  ///////////////////////////

  addAktSlubu(akty_slubow: Akty_slubow): Observable<Akty_slubow> {
    var header = this.headerService.getHeader();
    return this.http.post<Akty_slubow>(this.apiUrlSlubow, akty_slubow,{ headers: header });
  }

  deleteAktSlubu(id: number){
    var header = this.headerService.getHeader();
    return this.http.delete<Akty_slubow>(this.apiUrlSlubow + "/" + id, { headers: header });
  }

  /////////////////////////////

  addAktUrodzenia(akty_urodzenia: Akty_urodzenia): Observable<Akty_urodzenia> {
    var header = this.headerService.getHeader();
    return this.http.post<Akty_urodzenia>(this.apiUrlUrodzenia, akty_urodzenia,{ headers: header });
  }

  deleteAktUrodzenia(id: number){
    var header = this.headerService.getHeader();
    return this.http.delete<Akty_urodzenia>(this.apiUrlUrodzenia + "/" + id, { headers: header });
  }

  /////////////////////////////

  addAktZgonow(akty_zgonu: Akty_zgonu): Observable<Akty_zgonu> {
    var header = this.headerService.getHeader();
    return this.http.post<Akty_zgonu>(this.apiUrlZgonow, akty_zgonu,{ headers: header });
  }

  deleteAktZgonu(id: number){
    var header = this.headerService.getHeader();
    return this.http.delete<Akty_urodzenia>(this.apiUrlZgonow + "/" + id, { headers: header });
  }

  ///////////////////////////////////
  getAktyUrodzeniaObywatel(id_obywatela: string): Observable<Akty_urodzenia[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_urodzenia[]>(this.apiUrlUrodzenia + "/getAkt_urodzeniaFromUser/"+ id_obywatela, { headers: header });
  }

  getAktySlubowObywatel(id_obywatela: string): Observable<Akty_slubow[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_slubow[]>(this.apiUrlSlubow + "/getAkt_slubuFromUser/"+ id_obywatela, { headers: header });
  }


  getAktRozwoduObywatel(id_obywatela: string): Observable<Akty_rozwodu[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_rozwodu[]>(this.apiUrlRozwodow + "/getAkt_rozwoduFromUser/"+ id_obywatela, { headers: header });
  }

  getAktyZgonowObywatel(id_obywatela: string): Observable<Akty_zgonu[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_zgonu[]>(this.apiUrlZgonow + "/getAkt_zgonuFromUser/"+ id_obywatela, { headers: header });
  }

  ///////////////////////////////////
  getAktyUrodzeniaUrzednik(id_urzednika: string): Observable<Akty_urodzenia[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_urodzenia[]>(this.apiUrlUrodzenia + "/getAkt_urodzeniaFromUrzednik/"+ id_urzednika, { headers: header });
  }

  getAktySlubowUrzednik(id_urzednika: string): Observable<Akty_slubow[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_slubow[]>(this.apiUrlSlubow + "/getAkt_slubuFromUrzednik/"+ id_urzednika, { headers: header });
  }


  getAktRozwoduUrzednik(id_urzednika: string): Observable<Akty_rozwodu[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_rozwodu[]>(this.apiUrlRozwodow + "/getAkt_rozwoduFromUrzednik/"+ id_urzednika, { headers: header });
  }

  getAktyZgonowUrzednik(id_urzednika: string): Observable<Akty_zgonu[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_zgonu[]>(this.apiUrlZgonow + "/getAkt_zgonuFromUrzednik/"+ id_urzednika, { headers: header });
  }

  ///////////////////////////////////
  getAktyUrodzeniaUrzad(id_urzedu: string): Observable<Akty_urodzenia[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_urodzenia[]>(this.apiUrlUrodzenia + "/getAkt_urodzeniaFromUrzad/"+ id_urzedu, { headers: header });
  }

  getAktySlubowUrzad(id_urzedu: string): Observable<Akty_slubow[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_slubow[]>(this.apiUrlSlubow + "/getAkt_slubuFromUrzad/"+ id_urzedu, { headers: header });
  }


  getAktRozwoduUrzad(id_urzedu: string): Observable<Akty_rozwodu[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_rozwodu[]>(this.apiUrlRozwodow + "/getAkt_rozwoduFromUrzad/"+ id_urzedu, { headers: header });
  }

  getAktyZgonowUrzad(id_urzedu: string): Observable<Akty_zgonu[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Akty_zgonu[]>(this.apiUrlZgonow + "/getAkt_zgonuFromUrzad/"+ id_urzedu, { headers: header });
  }
}
