import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url: string = "https://portfoliomjca.onrender.com/api/persona/";
  /* url: string = "http://localhost:8080/api/persona/"; */

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  public detail(id: number): Observable<any> {
    return this.http.get<any>(this.url + `${id}`);
  }

  public update(persona: any): Observable<any> {
    return this.http.put<any>(this.url, persona);
  }

}
