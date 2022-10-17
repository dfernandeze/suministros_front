import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private URI = 'http://localhost:3000/'
  constructor(private http: HttpClient) {  }
  
  getProviders(): Observable<any> {
    return this.http.get(`${this.URI}proveedores`);
  }
}

