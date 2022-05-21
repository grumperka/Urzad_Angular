import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urzednicy } from 'src/app/components/objects/Urzednicy';
import { HeaderServiceService } from '../header-service.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UrzednicyServiceService {
  private apiUrl = 'https://localhost:7171/api/Urzednicy';

  constructor(private http: HttpClient, private headerService: HeaderServiceService) { }

  getUrzednicy(){
    var header = this.headerService.getHeader();
    return this.http.get<Urzednicy[]>(this.apiUrl, { headers: header });
  }

  getUrzednik(id: number){
    var header = this.headerService.getHeader();
    return this.http.get<Urzednicy>(this.apiUrl + "/" + id, { headers: header });
  }

  addUrzednik(urzednik: Urzednicy){
    var header = this.headerService.getHeader();
    return this.http.post<Urzednicy>(this.apiUrl, urzednik, { headers: header });
  }

  editUrzednik(urzednik: Urzednicy){
    var header = this.headerService.getHeader();
    return this.http.put<Urzednicy>(this.apiUrl+"/"+urzednik.id, urzednik, { headers: header });
  }

  deleteUrzednik(id: number){
    var header = this.headerService.getHeader();
    return this.http.delete<Urzednicy>(this.apiUrl+"/"+id, { headers: header });
  }
  
}
