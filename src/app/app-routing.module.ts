import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { EditEduComponent } from './components/education/edit-edu/edit-edu.component';
import { EditExpComponent } from './components/experience/edit-exp/edit-exp.component';
import { EditProjComponent } from './components/projects/edit-proj/edit-proj.component';


const routes: Routes = [
  //CAMBIAR CUANDO HAGA EL LOGIN:
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pruebas', component: PruebasComponent },
  { path: 'edit-edu/:id', component: EditEduComponent },
  { path: 'edit-exp/:id', component: EditExpComponent },
  { path: 'edit-skl/:id', component: EditSkillsComponent },
  { path: 'edit-proj/:id', component: EditProjComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
