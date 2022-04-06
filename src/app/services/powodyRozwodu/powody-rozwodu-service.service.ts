import { Injectable } from '@angular/core';
import { Powody_rozwodu } from 'src/app/components/objects/Powody_rozwodu';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PowodyRozwoduServiceService {
  private apiUrl = 'https://localhost:7171/api/Powody_rozwodu';

  constructor(private http: HttpClient) { }

  getPowodyRozwodu(): Observable<Powody_rozwodu[]> {
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Powody_rozwodu[]>(this.apiUrl, { headers: header });
  }
}
