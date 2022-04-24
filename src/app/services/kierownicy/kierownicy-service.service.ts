import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kierownicy } from 'src/app/components/objects/Kierownicy';
import { Kierownicy_Urzad } from 'src/app/components/objects/Kierownicy_Urzad';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class KierownicyServiceService {
  private apiUrl = 'https://localhost:7171/api/Kierownicy';

  constructor(private http: HttpClient) { }

  getKierownicy(){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Kierownicy[]>(this.apiUrl, { headers: header });
  }

  getKierownicy_Urzad(){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Kierownicy_Urzad[]>(this.apiUrl+'/GetKierownicy_Urzad', { headers: header });
  }

  getKierownik(id: number){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Kierownicy>(this.apiUrl + "/" + id, { headers: header });
  }

  addKierownik(kierownik: Kierownicy){
    console.log("SERVICE");
    console.log(kierownik);
    return this.http.post<Kierownicy>(this.apiUrl, kierownik, httpOptions);
  }

  editKierownik(kierownik: Kierownicy){
    console.log("SERVICE");
    console.log(kierownik);
    return this.http.put<Kierownicy>(this.apiUrl + "/" + kierownik.id, kierownik, httpOptions);
  }

  deleteKierownik(id: number){
    console.log("SERVICE");
    return this.http.delete<Kierownicy>(this.apiUrl + "/" + id, httpOptions);
  }

  
}
