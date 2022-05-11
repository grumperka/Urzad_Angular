import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/components/objects/Login';
import { Token } from 'src/app/components/objects/Token';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private apiUrl = 'https://localhost:7171/api/Login/';

  constructor(private http: HttpClient) { }

  loginObywatel(login: Login){
    console.log("SERVICE");
    console.log(login);
    return this.http.post<Token>(this.apiUrl+"PostObywatelLogin", login, httpOptions);
  }

  loginUrzednik(login: Login){
    console.log("SERVICE");
    console.log(login);
    return this.http.post<Token>(this.apiUrl+"PostUrzednikLogin", login, httpOptions);
  }

  loginKierownik(login: Login){
    console.log("SERVICE");
    console.log(login);
    return this.http.post<Token>(this.apiUrl+"PostKierownikLogin", login, httpOptions);
  }

  loginAdministrator(login: Login){
    console.log("SERVICE");
    console.log(login);
    return this.http.post<Token>(this.apiUrl+"PostAdministratorLogin", login, httpOptions);
  }

  isUserLogged(){
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', 'Content-Type');
    header.append('Access-Control-Allow-Methods', 'GET');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get<Token>(this.apiUrl+'isLogged', { headers: header });
  }
}
