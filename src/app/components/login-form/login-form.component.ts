import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  login: string;
  haslo: string;
  rola: string;
  rolaList: string[] = ["obywatel", "urzednik", "kierownik", "administrator"];

  constructor(private loginServices: LoginServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var errorInfo = "";

    if(!this.login) {
      errorInfo += 'Pole LOGIN nie może być puste \n';
    }

    if(!this.haslo) {
      errorInfo += 'Pole HASŁO nie może być puste \n';
    }

    if(!this.rola) {
      errorInfo += 'Pole ROLA  nie może być puste \n';
    }

    if(errorInfo != ""){
      alert(errorInfo);
    } else {
      const newLogin = {
        login: this.login,
        haslo: this.haslo
      };
    
      if(this.rola == "obywatel") {
        console.log("obywatel");
        this.loginServices.loginObywatel(newLogin).subscribe(resp => {
          console.log(resp);
          sessionStorage.setItem('token',resp.token);
          sessionStorage.setItem('rola',resp.rola);
          sessionStorage.setItem('userID',resp.userID.toString());
          this.router.navigateByUrl('/logged');
        },
          err => {
            alert('Nieprawidłowe dane logowania. Spróbuj ponownie.');
          });
      }
      else if (this.rola == "urzednik") {
        console.log("urzednik");
        this.loginServices.loginUrzednik(newLogin).subscribe(resp => {
          sessionStorage.setItem('token',resp.token);
          sessionStorage.setItem('rola',resp.rola);
          sessionStorage.setItem('userID',resp.userID.toString());
          this.router.navigateByUrl('/logged');
        },
          err => {
            alert('Nieprawidłowe dane logowania. Spróbuj ponownie.');
          });
      }
      else if (this.rola == "kierownik") {
        console.log("kierownik");
        this.loginServices.loginKierownik(newLogin).subscribe(resp => {
          sessionStorage.setItem('token',resp.token);
          sessionStorage.setItem('rola',resp.rola);
          sessionStorage.setItem('userID',resp.userID.toString());
          this.router.navigateByUrl('/logged');
        },
          err => {
            alert('Nieprawidłowe dane logowania. Spróbuj ponownie.');
          });
      }
      else if (this.rola == "administrator") {
        console.log("administrator");
        this.loginServices.loginAdministrator(newLogin).subscribe(resp => {
          sessionStorage.setItem('token',resp.token);
          sessionStorage.setItem('rola',resp.rola);
          sessionStorage.setItem('userID',resp.userID.toString());
          this.router.navigateByUrl('/logged');
        },
          err => {
            alert('Nieprawidłowe dane logowania. Spróbuj ponownie.');
          });
      }
    
    }
  }

}
