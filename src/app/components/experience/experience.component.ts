import { Component } from '@angular/core';
//import { PortfolioService } from 'src/app/services/portfolio.service';
import { PersonaService } from "src/app/services/persona.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experienceList: any;
  constructor (private personaData:PersonaService) {}

  ngOnInit(): void {
    this.personaData.getData().subscribe(data =>{
      console.log(data);
      this.experienceList=data.experience;
    });
  }

}
