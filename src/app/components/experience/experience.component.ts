import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experienceList: any;
  constructor (private portfolioData:PortfolioService) {}

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data =>{
      console.log(data);
      this.experienceList=data.experience;
    });
  }

}
