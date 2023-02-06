import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  miPortfolio: any;

  constructor(private portfolioData:PortfolioService) {}

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });
  }

}
