import { Component } from '@angular/core';
import { PersonaService } from "../../services/persona.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  persona: any;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getData().subscribe(data => {
      this.persona = data[0];
    });
  }

}
