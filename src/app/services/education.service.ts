import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  url:string="https://portfoliomjca.onrender.com/api/education/";
  /* url: string = "http://localhost:8080/api/education/"; */

  constructor(private http: HttpClient) { }

  public getData(): Observable<Education[]> {
    return this.http.get<Education[]>(this.url);
  }

  public search(id: number): Observable<Education> {
    return this.http.get<Education>(this.url + `${id}`);
  }

  public save(educ: Education): Observable<any> {
    return this.http.post<any>(this.url + 'new', educ);
  }

  public edit(id: number, educ: Education): Observable<any> {
    return this.http.put<any>(this.url + `edit/${id}`, educ);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
