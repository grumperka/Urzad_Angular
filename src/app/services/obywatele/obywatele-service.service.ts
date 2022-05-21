import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Obywatele } from 'src/app/components/objects/Obywatele';
import { HeaderServiceService } from '../header-service.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ObywateleServiceService {
  private apiUrl = 'https://localhost:7171/api/Obywatele';

  constructor(private http: HttpClient, private headerService: HeaderServiceService) { }

  getObywatele(){
    var header = this.headerService.getHeader();
    return this.http.get<Obywatele[]>(this.apiUrl, { headers: header });
  }

  getObywatel(id: number){
    var header = this.headerService.getHeader();
    return this.http.get<Obywatele>(this.apiUrl+"/"+id, { headers: header });
  }

  getObywateleM(){
    var header = this.headerService.getHeader();
    return this.http.get<Obywatele[]>(this.apiUrl+"/getObywatelM", { headers: header });
  }

  getObywateleK(){
    var header = this.headerService.getHeader();
    return this.http.get<Obywatele[]>(this.apiUrl+"/getObywatelK", { headers: header });
  }

  getObywateleRozwodniczki(id: number){
    var header = this.headerService.getHeader();
    return this.http.get<Obywatele[]>(this.apiUrl+"/getRozwodniczki/"+id, { headers: header });
  }

  getObywateleRozwodnikow(id: number){
    var header = this.headerService.getHeader();
    return this.http.get<Obywatele[]>(this.apiUrl+"/getRozwodnikow/"+id, { headers: header });
  }

  getObywateleSingle(){
    var header = this.headerService.getHeader();
    return this.http.get<Obywatele[]>(this.apiUrl+"/getSingle", { headers: header });
  }

  getObywateleAlive(){
    var header = this.headerService.getHeader();
    return this.http.get<Obywatele[]>(this.apiUrl+"/getAlive", { headers: header });
  }

  getObywateleAliveWithoutAktUrodzenia(){
    var header = this.headerService.getHeader();
    return this.http.get<Obywatele[]>(this.apiUrl+"/getAliveWithoutAktUrodzenia", { headers: header });
  }

  addObywatel(obywatel: Obywatele){
    var header = this.headerService.getHeader();
    return this.http.post<Obywatele>(this.apiUrl, obywatel, { headers: header });
  }

  editObywatel(obywatel: Obywatele){
    var header = this.headerService.getHeader();
    return this.http.put<Obywatele>(this.apiUrl+"/"+obywatel.id, obywatel, { headers: header });
  }

  deleteObywatel(id: number){
    var header = this.headerService.getHeader();
    return this.http.delete<Obywatele>(this.apiUrl+"/"+id, { headers: header });
  }
}
