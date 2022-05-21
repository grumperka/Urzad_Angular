import { Injectable } from '@angular/core';
import { Powody_rozwodu } from 'src/app/components/objects/Powody_rozwodu';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderServiceService } from '../header-service.service';

@Injectable({
  providedIn: 'root'
})
export class PowodyRozwoduServiceService {
  private apiUrl = 'https://localhost:7171/api/Powody_rozwodu';

  constructor(private http: HttpClient, private headerService: HeaderServiceService) { }

  getPowodyRozwodu(): Observable<Powody_rozwodu[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Powody_rozwodu[]>(this.apiUrl, { headers: header });
  }
}
