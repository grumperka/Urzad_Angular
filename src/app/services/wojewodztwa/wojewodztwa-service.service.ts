import { Injectable } from '@angular/core';
import { Wojewodztwa } from 'src/app/components/objects/Wojewodztwa';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WojewodztwaServiceService {
  private apiUrl = 'https://localhost:7171/api/Wojewodztwa';

  constructor(private http: HttpClient) { }

  getWojewodztwa(): Observable<Wojewodztwa[]> {
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Wojewodztwa[]>(this.apiUrl, { headers: header });
  }
}
