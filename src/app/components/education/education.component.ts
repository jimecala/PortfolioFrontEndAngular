import { Component } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educ: Education[] = [];

  /*constructor (private expServ: ExperienceService, private tokenServ: TokenService) {}

  isLogged = false;
  
  */
  constructor(private eduServ: EducationService) { }

  ngOnInit(): void {
    this.load();
    /* if(this.tokenService.getToken()){
      this.isLogged = true;
      } else {
        this.isLogged = false;
      } */
  }

  load(): void {
    this.eduServ.getData().subscribe(data => {
      this.educ = data;
    });
  }

  delete(id: number) {
    if (id != undefined) {
      this.eduServ.delete(id).subscribe(
        data => {
          this.load();
        }, error => {
          alert("Error");
          window.location.reload();
        })
    }
  }

}
