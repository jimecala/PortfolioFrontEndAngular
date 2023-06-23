import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-new-proj',
  templateUrl: './new-proj.component.html',
  styleUrls: ['./new-proj.component.css']
})
export class NewProjComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private projServ: ProjectsService) {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        description: ['', [Validators.required, Validators.min(0), Validators.max(500)]],
        imgProject: [''],
      }
    )

  }

  ngOnInit(): void {
  }

  //Declaraciones
  get Name() {
    return this.form.get('name');
  }

  get Description() {
    return this.form.get('description');
  }

  get ImgProject() {
    return this.form.get('imgProject');
  }

  //Validaciones
  get NameValid() {
    return this.Name?.touched && !this.Name.valid;
  }

  get DescriptionValid() {
    return this.Description?.touched && !this.Description.valid;
  }

  get ImgProjectValid() {
    return this.ImgProject?.touched && !this.ImgProject.valid;
  }

  onNew(): void {
    const proj = new Projects(this.form.value.name, this.form.value.description, this.form.value.imgProject);
    this.projServ.save(proj).subscribe(data => {
      alert("Proyecto añadido");
      window.location.reload();
    }, error => {
      alert("Error");
      this.form.reset();
    });
  }

  clean(): void {
    this.form.reset();
  }


}
