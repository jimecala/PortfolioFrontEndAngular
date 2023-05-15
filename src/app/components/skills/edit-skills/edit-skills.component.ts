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
  form: FormGroup;
  skills:Skills=new Skills('',0);
  constructor(private formBuilder:FormBuilder, 
              private skillsService:SkillsService,
              private activatedRoute:ActivatedRoute,
              private route:Router) { 
    this.form = formBuilder.group(
      {
        id:[''],
        name:['',[Validators.required]],
        skillLevel:['',[Validators.required, Validators.min(0), Validators.max(100)]]
      }
    )
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsService.detail(id).subscribe(data =>{
      this.skills = data;
    });    
  }

  get Name() {
     return this.form.get('name');
   }
 
   get SkillLevel() {
     return this.form.get('skillLevel');
   } 

   onUpdate(event:Event): void{
    event.preventDefault;
    this.skillsService.editSkill(this.form.value).subscribe(data=>{
      this.route.navigate(['']);
    }, err => {
      alert("ERROR");
    })
  }


}
