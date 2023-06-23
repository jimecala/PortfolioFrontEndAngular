import { Component } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { Skills } from 'src/app/models/skills';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pruebas-modal',
  templateUrl: './pruebas-modal.component.html',
  styleUrls: ['./pruebas-modal.component.css']
})
export class PruebasModalComponent {
  skills: Skills = new Skills('', 0);;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private skillsServ: SkillsService, private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group(
      {
        id: [''],
        name: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        percentage: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      }
    )
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsServ.search(id).subscribe(data => {
      this.skills = data;
    });
  }

  //Para las validaciones
  get Name() {
    return this.form.get('name');
  }

  get Percentage() {
    return this.form.get('percentage');
  }


  clean(): void {
    this.form.reset();
  }

}


