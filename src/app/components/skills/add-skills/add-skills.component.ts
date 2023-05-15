import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from "src/app/services/skills.service";

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent {
  form: FormGroup;
  name = '';
  skillLevel = 0;
  
  constructor(private formBuilder:FormBuilder, private skillsService:SkillsService, private activatedRoute:ActivatedRoute,
    private route:Router) {
    this.form = formBuilder.group(
      {
        name:['',[Validators.required]],
        skillLevel:['',[Validators.required, Validators.min(0), Validators.max(100)]]
      }
    )
  }
  
  ngOnInit(): void {
  }

  get Name() {
    return this.form.get('name');
  }

  get SkillLevel() {
    return this.form.get('skillLevel');
  }
  
  get ValidName() {
    return this.Name?.touched && !this.Name.valid;
  } 

  get ValidSkillLevel() {
    return this.SkillLevel?.touched && !this.SkillLevel.valid;
  }  

  onCreate(event:Event): void{
    const skl = new Skills(this.name,this.skillLevel);
    this.skillsService.newSkill(skl).subscribe(data=>{
      this.route.navigateByUrl("/")
      window.location.reload();
    }, error => {
      alert("No se pudo agregar nueva habilidad");
      this.form.reset();
    })
  }

  clean(): void{
    this.form.reset();
  }

}
