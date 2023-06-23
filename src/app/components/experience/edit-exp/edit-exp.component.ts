import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent {
  experience: Experience = new Experience('', '', new Date(), new Date());
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private ExpServ: ExperienceService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = formBuilder.group(
      {
        id: [''],
        employer: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        position: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        startDate: [''],
        endDate: [''],
      }
    )
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.ExpServ.search(id).subscribe(data => {
      this.experience = data;
      this.form.patchValue({
        id: this.experience.id,
        employer: this.experience.employer,
        position: this.experience.position,
        startDate: this.experience.startDate,
        endDate: this.experience.endDate
      });
    });
  };


  //Validaciones
  get Employer() {
    return this.form.get('employer');
  }

  get Position() {
    return this.form.get('position');
  }

  get StartDate() {
    return this.form.get('startDate');
  }

  get EndDate() {
    return this.form.get('endDate');
  }

  onSave(event: Event): void {
    event.preventDefault;
    this.ExpServ.save(this.form.value).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error");
    })
  }

  clean(): void {
    this.form.reset();
  }


}
