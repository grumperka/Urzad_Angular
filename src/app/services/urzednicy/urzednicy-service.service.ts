import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urzednicy } from 'src/app/components/objects/Urzednicy';

@Injectable({
  providedIn: 'root'
})
export class UrzednicyServiceService {
  private apiUrl = 'https://localhost:7171/api/Urzednicy';

  constructor(private http: HttpClient) { }

  getUrzednicy(){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Urzednicy[]>(this.apiUrl, { headers: header });
  }
}
