import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  exps: Experience[] = [];

  /*constructor (private expServ: ExperienceService, private tokenServ: TokenService) {}

  isLogged = false;
  
  */
  constructor(private expServ: ExperienceService) { }

  ngOnInit(): void {
    this.load();
    /* if (this.tokenServ.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    */
  }

  load(): void {
    this.expServ.getData().subscribe(data => { this.exps = data; });
  }

  delete(id: number) {
    if (id != undefined) {
      this.expServ.delete(id).subscribe(
        data => {
          this.load();
        }, error => {
          alert("Error");
          window.location.reload();
        })
    }
  }
}
