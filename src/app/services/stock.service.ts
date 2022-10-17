import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs-compat/observable";
@Injectable({
  providedIn: 'root'
})
export class StockServiceService {
  private URI = 'http://localhost:3000/'
  constructor(private http: HttpClient) {  }
  
  getStock(): Observable<any> {
    return this.http.get(`${this.URI}stock`);
  }

}
