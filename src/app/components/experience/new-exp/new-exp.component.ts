import { Component } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from 'src/app/models/experience';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})

export class NewExpComponent {
  form: FormGroup;
  /*  employer = '';
   position = '';
   startDate = new Date('2023-01-01');
   endDate = new Date('2023-01-01'); */


  constructor(private formBuilder: FormBuilder, private expServ: ExperienceService) {
    this.form = this.formBuilder.group(
      {
        employer: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        position: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
      }
    )

  }

  ngOnInit(): void {

  }

  //Declaraciones
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

  //Validaciones
  get EmployerValid() {
    return this.Employer?.touched && !this.Employer.valid;
  }

  get PositionValid() {
    return this.Position?.touched && !this.Position.valid;
  }

  get StartDateValid() {
    return this.StartDate?.touched && !this.StartDate.valid;
  }
  get EndDateValid() {
    return this.EndDate?.touched && !this.EndDate.valid;
  }

  onNew(): void {
    const exp = new Experience(this.form.value.employer, this.form.value.position, this.form.value.startDate, this.form.value.endDate);
    this.expServ.save(exp).subscribe(data => {
      alert("Experiencia añadida");
      window.location.reload();
    }, error => {
      alert("Error");
      this.form.reset();
    }
    )
  }

  clean(): void {
    this.form.reset();
  }

}



