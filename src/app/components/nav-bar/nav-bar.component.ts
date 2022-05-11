import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  token: string | null = null;
  rola: string | null = null;
  userID: string | null = null;
  isLogged: boolean = false;

  constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {
    console.log("ngOnInit");

    if(sessionStorage.getItem('token') != null && sessionStorage.getItem('rola') != null && sessionStorage.getItem('userID') != null)
    {
      this.token = sessionStorage.getItem('token');
      this.rola = sessionStorage.getItem('rola');
      this.userID = sessionStorage.getItem('userID');
      this.isLogged = true;
    }

    console.log("Data: "+this.token + " " + this.rola + " " + this.userID);
    
   }

   logout(){
    sessionStorage.clear()
    this.isLogged = false;
   }

}
