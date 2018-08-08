import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { API } from '../../../config/config'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  api:string = API;

  constructor(private http: HttpClient) { }

  /**
   * 
   */
  isAuthenticated(): boolean {
    let user = JSON.parse(localStorage.getItem('user'));    
    
    if(user){
      return user['token'] ? true : false;
    }else{
      return false;
    }

  }

  /**
   * 
   * @param email 
   * @param password 
   */
  login(username:string, password:string) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(`${this.api}/login/`, { username, password }, httpOptions);
  }

  /**
   * 
   */
  user() {
    let user = JSON.parse(localStorage.getItem('user'));    

    if(user){
      return user['user_id'] ? user['user_id'] : null;
    }else{
      return null;
    }

  }
}
