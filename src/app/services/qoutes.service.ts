import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QoutesService {
  URL: string = "https://dummyjson.com/quotes/random";
  URL2: string = "https://dummyjson.com/products/categories";
  categoriesList: any = [];
  constructor(private http: HttpClient) {
   }
  getQoute(): any {
    return this.http.get(this.URL);
  }
}
