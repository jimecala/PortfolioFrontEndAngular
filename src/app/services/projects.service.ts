import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  url: string = "https://portfoliomjca.onrender.com/api/projects/";
  /* url: string = "http://localhost:8080/api/projects/"; */

  constructor(private http: HttpClient) { }

  public getData(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.url);
  }

  public search(id: number): Observable<Projects> {
    return this.http.get<Projects>(this.url + `${id}`);
  }

  public save(proj: Projects): Observable<any> {
    return this.http.post<any>(this.url + 'new', proj);
  }

  public edit(id: number, proj: Projects): Observable<any> {
    return this.http.put<any>(this.url + `edit/${id}`, proj);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
