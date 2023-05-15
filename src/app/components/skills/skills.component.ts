import { Component } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
  skills: any;
  //skills: Skills []=[];
  skill: Skills = {
    id: 0,
    name: "",
    skillLevel: 0
  };


  constructor(private skillsService:SkillsService) {}

  ngOnInit(): void {
    this.showSkills();
  }

  showSkills():void{
    this.skillsService.list().subscribe(data =>{
      this.skills = data;
    });
  }

  deleteSkill(id:number){
    if (id != undefined){
      this.skillsService.deleteSkill(id).subscribe(
        data =>{
          this.showSkills();
        }, err =>{
          window.location.reload();
        })
    }}


}
