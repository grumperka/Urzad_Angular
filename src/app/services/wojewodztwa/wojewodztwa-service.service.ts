import { Injectable } from '@angular/core';
import { Wojewodztwa } from 'src/app/components/objects/Wojewodztwa';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderServiceService } from '../header-service.service';

@Injectable({
  providedIn: 'root'
})
export class WojewodztwaServiceService {
  private apiUrl = 'https://localhost:7171/api/Wojewodztwa';

  constructor(private http: HttpClient, private headerService: HeaderServiceService) { }

  getWojewodztwa(): Observable<Wojewodztwa[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Wojewodztwa[]>(this.apiUrl, { headers: header });
  }
}
