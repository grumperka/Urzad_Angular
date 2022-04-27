import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Obywatele } from 'src/app/components/objects/Obywatele';

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

  constructor(private http: HttpClient) { }

  getObywatele(){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Obywatele[]>(this.apiUrl, { headers: header });
  }

  getObywatel(id: number){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Obywatele>(this.apiUrl+"/"+id, { headers: header });
  }

  getObywateleM(){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Obywatele[]>(this.apiUrl+"/getObywatelM", { headers: header });
  }

  getObywateleK(){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Obywatele[]>(this.apiUrl+"/getObywatelK", { headers: header });
  }

  getObywateleRozwodniczki(id: number){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Obywatele[]>(this.apiUrl+"/getRozwodniczki/"+id, { headers: header });
  }

  getObywateleRozwodnikow(id: number){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Obywatele[]>(this.apiUrl+"/getRozwodnikow/"+id, { headers: header });
  }

  getObywateleSingle(){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Obywatele[]>(this.apiUrl+"/getSingle", { headers: header });
  }

  getObywateleAlive(){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Obywatele[]>(this.apiUrl+"/getAlive", { headers: header });
  }

  getObywateleAliveWithoutAktUrodzenia(){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Obywatele[]>(this.apiUrl+"/getAliveWithoutAktUrodzenia", { headers: header });
  }

  addObywatel(obywatel: Obywatele){
    console.log("SERVICE");
    console.log(obywatel);
    return this.http.post<Obywatele>(this.apiUrl, obywatel, httpOptions);
  }

  editObywatel(obywatel: Obywatele){
    console.log("SERVICE");
    console.log(obywatel);
    return this.http.put<Obywatele>(this.apiUrl+"/"+obywatel.id, obywatel, httpOptions);
  }

  deleteObywatel(id: number){
    console.log("SERVICE");
    return this.http.delete<Obywatele>(this.apiUrl+"/"+id, httpOptions);
  }
}
