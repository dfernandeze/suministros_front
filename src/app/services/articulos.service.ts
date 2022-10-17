import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs-compat/observable";
@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private URI = 'http://localhost:3000/'
  constructor(private http: HttpClient) {  }
  
  getArticles(): Observable<any> {
    return this.http.get(`${this.URI}articulo`);
  }

  postArticle(data: any): Observable<any> {
    return this.http.post(`${this.URI}articulo/add`, data)
  }

  deleteArticle(id:any): Observable<any> {
    return this.http.delete(`${this.URI}articulo/${id}`)
  }
}
