import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API } from '../../../config/config'

const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/json' ,
    'Authorization': 'Token c5bbe9679b287d21c8846f1adc4ceecc56605a0b',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api: string = API;

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param point 
   */
  getAll(point: string): Observable<any> {
    return this.http.get(`${this.api}/${point}/`, httpOptions);
  }

  /**
   * 
   * @param point 
   * @param id 
   */
  getById(point: string, id: number): Observable<any> {
    return this.http.get(`${this.api}/${point}/${id}`, httpOptions);
  }

  /**
   * 
   * @param point 
   */
  getSelect(point: string): Observable<any> {
    return this.http.get(`${this.api}/${point}/?fields=id,name`, httpOptions);
  }

    /**
   * 
   * @param point 
   * @param id 
   */
  getSelectById(point: string, id:number): Observable<any> {
    return this.http.get(`${this.api}/${point}/${id}?fields=id,name`, httpOptions);
  }

  /**
   * 
   * @param point 
   * @param params 
   */
  getSelectByParams(point: string, params:string): Observable<any> {
    return this.http.get(`${this.api}/${point}/?fields=${params}`, httpOptions);
  }

  /**
   * 
   * @param point 
   * @param id 
   * @param params 
   */
  getSelectByIdAndParams(point: string, id:number, params:string): Observable<any> {
    return this.http.get(`${this.api}/${point}/${id}?fields=${params}`, httpOptions);
  }

  /**
   * 
   * @param point 
   * @param data 
   */
  create(point: string, data: any): Observable<any> {
    return this.http.post(`${this.api}/${point}/`, data, httpOptions);
  }

  /**
   * 
   * @param point 
   * @param id 
   * @param data 
   */
  update(point: string, id: number, data: any) : Observable<any> {
    return this.http.put(`${this.api}/${point}/${id}`, data, httpOptions);
  }

  /**
   * 
   * @param point 
   * @param id 
   */
  delete(point: string, id: number) {
    return this.http.delete(`${this.api}/${point}/${id}`, httpOptions);
  }

}
