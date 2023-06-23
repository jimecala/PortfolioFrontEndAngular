import { Component } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { Skills } from 'src/app/models/skills';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-skl',
  templateUrl: './new-skl.component.html',
  styleUrls: ['./new-skl.component.css']
})

export class NewSklComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private sklServ: SkillsService) {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
        percentage: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      }
    )

  }

  ngOnInit(): void {
  }

  //Declaraciones
  get Name() {
    return this.form.get('name');
  }

  get Percentage() {
    return this.form.get('percentage');
  }

  //Validaciones
  get NameValid() {
    return this.Name?.touched && !this.Name.valid;
  }

  get PercentageValid() {
    return this.Percentage?.touched && !this.Percentage.valid;
  }


  onNew(): void {
    if (this.form.valid) {
      const skl = new Skills(this.form.value.name, this.form.value.percentage);
      this.sklServ.save(skl).subscribe(data => {
        alert("Habilidad añadida");
        window.location.reload();
      }, error => {
        alert("Error");
        this.form.reset();
      });
    }
  }

  clean(): void {
    this.form.reset();
  }

}
