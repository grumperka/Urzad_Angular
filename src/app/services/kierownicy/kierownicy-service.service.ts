import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kierownicy } from 'src/app/components/objects/Kierownicy';
import { Kierownicy_Urzad } from 'src/app/components/objects/Kierownicy_Urzad';
import { HeaderServiceService } from '../header-service.service';

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

  constructor(private http: HttpClient, private headerService: HeaderServiceService) { }

  getKierownicy(){
    var header = this.headerService.getHeader();
    return this.http.get<Kierownicy[]>(this.apiUrl, { headers: header });
  }

  getKierownicy_Urzad(){
    var header = this.headerService.getHeader();
    return this.http.get<Kierownicy_Urzad[]>(this.apiUrl+'/GetKierownicy_Urzad', { headers: header });
  }

  getKierownik(id: number){
    var header = this.headerService.getHeader();
    return this.http.get<Kierownicy>(this.apiUrl + "/" + id, { headers: header });
  }

  addKierownik(kierownik: Kierownicy){
    var header = this.headerService.getHeader();
    return this.http.post<Kierownicy>(this.apiUrl, kierownik, { headers: header });
  }

  editKierownik(kierownik: Kierownicy){
    var header = this.headerService.getHeader();
    return this.http.put<Kierownicy>(this.apiUrl + "/" + kierownik.id, kierownik, { headers: header });
  }

  deleteKierownik(id: number){
    var header = this.headerService.getHeader();
    return this.http.delete<Kierownicy>(this.apiUrl + "/" + id, { headers: header });
  }

  
}
