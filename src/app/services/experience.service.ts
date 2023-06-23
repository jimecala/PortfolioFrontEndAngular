import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  url: string = "https://portfoliomjca.onrender.com/api/experience/";
  /* url = 'http://localhost:8080/api/experience/'; */

  constructor(private http: HttpClient) { }

  public getData(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url);
  }

  public search(id: number): Observable<Experience> {
    return this.http.get<Experience>(this.url + `${id}`);
  }

  public save(skills: Experience): Observable<any> {
    return this.http.post<any>(this.url + 'new', skills);
  }

  public edit(id: number, skills: Experience): Observable<any> {
    return this.http.put<any>(this.url + `edit/${id}`, skills);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

}
