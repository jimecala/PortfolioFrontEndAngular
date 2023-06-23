import { Component } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  persona: any;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getData().subscribe(data => {
      this.persona = data[0];
    });
  }
}
