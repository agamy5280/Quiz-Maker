import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QoutesService {
  URL: string = "https://dummyjson.com/quotes/random";
  qoute: string ="";
  author: string ="";
  temp: any;
  constructor(private http: HttpClient) {
   }
  //  getCategories(): any {
  //   return this.httpClient.get(`${environment.apiUrl}categories/`);
  // }
  getQoute(): any {
    return this.http.get(this.URL);
    // console.log(this.temp);
  }
}
