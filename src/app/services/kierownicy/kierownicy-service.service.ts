import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kierownicy } from 'src/app/components/objects/Kierownicy';

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
}
