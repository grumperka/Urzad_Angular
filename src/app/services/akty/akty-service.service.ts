import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Akty_rozwodu } from 'src/app/components/objects/Akty_rozwodu';
import { Observable, of } from 'rxjs';
import { Akty_urodzenia } from 'src/app/components/objects/Akty_urodzenia';
import { Akty_slubow } from 'src/app/components/objects/Akty_slubow';
import { Akty_zgonu } from 'src/app/components/objects/Akty_zgonu';

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

  constructor(private http: HttpClient) { }

  getAktyUrodzenia(): Observable<Akty_urodzenia[]> {
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Akty_urodzenia[]>(this.apiUrlUrodzenia, { headers: header });
  }

  getAktySlubow(): Observable<Akty_slubow[]> {
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Akty_slubow[]>(this.apiUrlSlubow, { headers: header });
  }

  getAktyRozwodow(): Observable<Akty_rozwodu[]> {
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Akty_rozwodu[]>(this.apiUrlRozwodow, { headers: header });
  }

  getAktRozwodu(id: number): Observable<Akty_rozwodu> {
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Akty_rozwodu>(this.apiUrlRozwodow + "/" + id, { headers: header });
  }

  getAktyZgonow(): Observable<Akty_zgonu[]> {
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Akty_zgonu[]>(this.apiUrlZgonow, { headers: header });
  }

  //////////////////////////
  
  addAktRozwodu(akty_rozwodu: Akty_rozwodu){
    console.log("SERVICE");
    console.log(akty_rozwodu);
    return this.http.post<Akty_rozwodu>(this.apiUrlRozwodow, akty_rozwodu, httpOptions);
  }

  deleteAktRozwodu(id: number){
    console.log("SERVICE");
    return this.http.delete<Akty_rozwodu>(this.apiUrlRozwodow + "/" + id, httpOptions);
  }

  editAktRozwodu(akty_rozwodu: Akty_rozwodu){
    console.log("SERVICE");
    return this.http.put<Akty_rozwodu>(this.apiUrlRozwodow + "/" + akty_rozwodu.id, akty_rozwodu, httpOptions);
  }
  
  ///////////////////////////

  addAktSlubu(akty_slubow: Akty_slubow): Observable<Akty_slubow> {
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.post<Akty_slubow>(this.apiUrlSlubow, akty_slubow,{ headers: header });
  }

  deleteAktSlubu(id: number){
    console.log("SERVICE");
    return this.http.delete<Akty_slubow>(this.apiUrlSlubow + "/" + id, httpOptions);
  }

  /////////////////////////////

  addAktUrodzenia(akty_urodzenia: Akty_urodzenia): Observable<Akty_urodzenia> {
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.post<Akty_urodzenia>(this.apiUrlUrodzenia, akty_urodzenia,{ headers: header });
  }

  deleteAktUrodzenia(id: number){
    console.log("SERVICE");
    return this.http.delete<Akty_urodzenia>(this.apiUrlUrodzenia + "/" + id, httpOptions);
  }

  /////////////////////////////

  addAktZgonow(akty_zgonu: Akty_zgonu): Observable<Akty_zgonu> {
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.post<Akty_zgonu>(this.apiUrlZgonow, akty_zgonu,{ headers: header });
  }

  deleteAktZgonu(id: number){
    console.log("SERVICE");
    return this.http.delete<Akty_urodzenia>(this.apiUrlZgonow + "/" + id, httpOptions);
  }
}
