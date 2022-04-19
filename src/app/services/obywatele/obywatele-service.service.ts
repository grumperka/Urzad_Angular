import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Obywatele } from 'src/app/components/objects/Obywatele';

@Injectable({
  providedIn: 'root'
})
export class ObywateleServiceService {
  private apiUrl = 'https://localhost:7171/api/Obywatele';

  constructor(private http: HttpClient) { }

  getObywatele(){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Obywatele[]>(this.apiUrl, { headers: header });
  }
}
