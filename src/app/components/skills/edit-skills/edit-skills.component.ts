import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent {
  skills: Skills = new Skills('', 0);
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private skillsServ: SkillsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = formBuilder.group(
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
      this.form.patchValue({
        id: this.skills.id,
        name: this.skills.name,
        percentage: this.skills.percentage
      });
    });
  };


  //Validaciones
  get Name() {
    return this.form.get('name');
  }

  get Percentage() {
    return this.form.get('percentage');
  }

  onSave(event: Event): void {
    event.preventDefault;
    this.skillsServ.save(this.form.value).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error");
    })
  }


  clean(): void {
    this.form.reset();
  }

}