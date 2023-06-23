import { Component } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {
  skills: Skills[] = [];

  /*constructor (private expServ: ExperienceService, private tokenServ: TokenService) {}

  isLogged = false;
  
  */
  constructor(private skillsServ: SkillsService) { }

  ngOnInit(): void {
    this.load();
    /* if(this.tokenService.getToken()){
      this.isLogged = true;
      } else {
        this.isLogged = false;
      } */
  }

  load(): void {
    this.skillsServ.getData().subscribe(data => {
      this.skills = data;
    });
  }

  delete(id: number) {
    if (id != undefined) {
      this.skillsServ.delete(id).subscribe(
        data => {
          this.load();
        }, error => {
          alert("Error");
          window.location.reload();
        })
    }
  }

}