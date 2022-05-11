import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {
  isKierownik: boolean = false;
  isAdministrator: boolean = false;
  isUrzednik: boolean = false;
  isObywatel: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem("rola") == "kierownik")
    {
      this.isKierownik = true;
    }  
    else if(sessionStorage.getItem("rola") == "administrator")
    {
      this.isAdministrator = true;
    }
    else if(sessionStorage.getItem("rola") == "urzednik")
    {
      this.isUrzednik = true;
    }
    else if(sessionStorage.getItem("rola") == "obywatel")
    {
      this.isObywatel = true;
    }
  }

}
