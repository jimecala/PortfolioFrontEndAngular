import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from "src/app/models/skills";

@Injectable({
  providedIn: 'root'
})
export class PruebasService {
  url: string = "http://localhost:8080/api/skills/";

  constructor(private http: HttpClient) { }

  public getData(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.url);
  }

  public search(id: number): Observable<Skills> {
    return this.http.get<Skills>(this.url + `${id}`);
  }

  public save(skills: Skills): Observable<any> {
    return this.http.post<any>(this.url + 'new', skills);
  }

  public edit(id: number, skills: Skills): Observable<any> {
    return this.http.put<any>(this.url + `edit/${id}`, skills);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

}
