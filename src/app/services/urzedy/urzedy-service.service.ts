import { Injectable } from '@angular/core';
import { Urzad_Woj } from 'src/app/components/objects/Urzad_Woj';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Urzedy } from 'src/app/components/objects/Urzedy';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UrzedyServiceService {
  private apiUrl = 'https://localhost:7171/api/Urzedy';

  constructor(private http: HttpClient) { }

  getUrzedy(): Observable<Urzad_Woj[]> {
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Urzad_Woj[]>(this.apiUrl, { headers: header });
  }

  addUrzedy(urzedy: Urzedy): Observable<Urzedy>{
    console.log("SERVICE");
    console.log(urzedy);
    return this.http.post<Urzedy>(this.apiUrl, urzedy, httpOptions);
  }
}
