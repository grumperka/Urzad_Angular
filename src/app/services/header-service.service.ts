import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  constructor() { }

  setHeader(item: string){
    return new HttpHeaders().set('Authorization', item);
  }

  getHeader(){
  var cS = sessionStorage.getItem("connectionString");
  if(cS!= null){
    var header = this.setHeader(cS);
  }
  else var header = new HttpHeaders();

  return header;
  }

}
