import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urzednicy } from 'src/app/components/objects/Urzednicy';

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

  constructor(private http: HttpClient) { }

  getUrzednicy(){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Urzednicy[]>(this.apiUrl, { headers: header });
  }

  getUrzednik(id: number){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Urzednicy>(this.apiUrl + "/" + id, { headers: header });
  }

  addUrzednik(urzednik: Urzednicy){
    console.log("SERVICE");
    console.log(urzednik);
    return this.http.post<Urzednicy>(this.apiUrl, urzednik, httpOptions);
  }

  editUrzednik(urzednik: Urzednicy){
    console.log("SERVICE");
    console.log(urzednik);
    return this.http.put<Urzednicy>(this.apiUrl+"/"+urzednik.id, urzednik, httpOptions);
  }

  deleteUrzednik(id: number){
    console.log("SERVICE");
    return this.http.delete<Urzednicy>(this.apiUrl+"/"+id, httpOptions);
  }
  
}
