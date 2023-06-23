import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-edit-proj',
  templateUrl: './edit-proj.component.html',
  styleUrls: ['./edit-proj.component.css']
})
export class EditProjComponent {
  projects: Projects = new Projects('', '', '');
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private projServ: ProjectsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = formBuilder.group(
      {
        id: [''],
        name: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        description: ['', [Validators.required, Validators.min(0), Validators.max(500)]],
        imgProject: [''],
      }
    )
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projServ.search(id).subscribe(data => {
      this.projects = data;
      this.form.patchValue({
        id: this.projects.id,
        name: this.projects.name,
        description: this.projects.description,
        imgProject: this.projects.imgProject
      });
    });
  };


  //Validaciones
  get Name() {
    return this.form.get('name');
  }

  get Description() {
    return this.form.get('description');
  }

  get ImgProject() {
    return this.form.get('imgProject');
  }

  onSave(event: Event): void {
    event.preventDefault;
    this.projServ.save(this.form.value).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error");
    })
  }


  clean(): void {
    this.form.reset();
  }

}
