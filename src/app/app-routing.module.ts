import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { AddSkillsComponent } from './components/skills/add-skills/add-skills.component';



const routes: Routes = [
    //{path:'portfolio', component:PortfolioComponent},
    {path:'login', component:LoginComponent},
    //{path: 'editBanner/:id', component: },
    {path: 'addSkills', component:AddSkillsComponent},
    {path:'editSkills/:id', component:EditSkillsComponent },
    {path:'', redirectTo:'login', pathMatch:'full'}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
