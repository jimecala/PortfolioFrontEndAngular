import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent {
  education: Education = new Education('', '', new Date());
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private EduServ: EducationService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = formBuilder.group(
      {
        id: [''],
        institution: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        degree: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        endDate: [''],
      }
    )
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.EduServ.search(id).subscribe(data => {
      this.education = data;
      this.form.patchValue({
        id: this.education.id,
        institution: this.education.institution,
        degree: this.education.degree,
        endDate: this.education.endDate
      });
    });
  };


  //Validaciones
  get Institution() {
    return this.form.get('institution');
  }

  get Degree() {
    return this.form.get('degree');
  }

  get EndDate() {
    return this.form.get('endDate');
  }

  onSave(event: Event): void {
    event.preventDefault;
    this.EduServ.save(this.form.value).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error");
    })
  }

  clean(): void {
    this.form.reset();
  }

}