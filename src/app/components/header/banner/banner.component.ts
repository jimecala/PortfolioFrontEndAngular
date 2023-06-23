import { Component } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent {
  persona: any;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getData().subscribe(data => {
      this.persona = data[0];
    });

  }

}
