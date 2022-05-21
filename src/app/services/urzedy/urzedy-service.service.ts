import { Injectable } from '@angular/core';
import { Urzad_Woj } from 'src/app/components/objects/Urzad_Woj';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Urzedy } from 'src/app/components/objects/Urzedy';
import { HeaderServiceService } from '../header-service.service';

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

  constructor(private http: HttpClient, private headerService: HeaderServiceService) { }

  getUrzedy(): Observable<Urzad_Woj[]> {
    var header = this.headerService.getHeader();
    return this.http.get<Urzad_Woj[]>(this.apiUrl, { headers: header });
  }

  getUrzad(id: number): Observable<Urzad_Woj> {
    var header = this.headerService.getHeader();
    return this.http.get<Urzad_Woj>(this.apiUrl + '/' + id, { headers: header });
  }


  addUrzedy(urzedy: Urzedy): Observable<Urzedy>{
    var header = this.headerService.getHeader();
    return this.http.post<Urzedy>(this.apiUrl, urzedy, { headers: header });
  }

  deleteUrzedy(urzedy: Urzedy){
    var header = this.headerService.getHeader();
    return this.http.delete<number>(this.apiUrl+'/'+urzedy.id,{ headers: header });
  }

  editUrzedy(id: number,urzedy: Urzedy): Observable<Urzedy>{
    var header = this.headerService.getHeader();
    return this.http.put<Urzedy>(this.apiUrl + '/' + id, urzedy, { headers: header });
  }
}
