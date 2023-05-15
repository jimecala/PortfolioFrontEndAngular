import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from "src/app/models/skills";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url:string="https://portfoliomjca.onrender.com/api/";

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(this.url+`${"skills"}`);
  }

  public list():Observable<any>{
    return this.http.get<any>(this.url+`${"skills"}`);
  }

  public deleteSkill(id: number):Observable<any>{
    return this.http.delete<any>(this.url + 'delete/' + id);
  }

  public newSkill(skills: Skills):Observable<any>{
    return this.http.post<any>(this.url + 'new',skills);
  }

 public detail(id: number):Observable<any>{
    return this.http.get<any>(this.url+`${id}`);
  }

  public editSkill(skills: any):Observable<any>{
    return this.http.put<any>(this.url + 'edit',skills);
  }

}
