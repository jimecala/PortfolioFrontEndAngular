import { Component } from '@angular/core';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Projects[] = [];

  /*constructor (private expServ: ExperienceService, private tokenServ: TokenService) {}

  isLogged = false;
  
  */
  constructor(private projServ: ProjectsService) { }

  ngOnInit(): void {
    this.load();
    /* if(this.tokenService.getToken()){
      this.isLogged = true;
      } else {
        this.isLogged = false;
      } */
  }

  load(): void {
    this.projServ.getData().subscribe(data => {
      this.projects = data;
    });
  }

  delete(id: number) {
    if (id != undefined) {
      this.projServ.delete(id).subscribe(
        data => {
          this.load();
        }, error => {
          alert("Error");
          window.location.reload();
        })
    }
  }

}
