import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from "@angular/common";
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
//import { PortfolioService } from './services/portfolio.service';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { PruebasModalComponent } from './components/pruebas/pruebas-modal/pruebas-modal.component';
import { FormsModule } from '@angular/forms';
import { NewEduComponent } from './components/education/new-edu/new-edu.component';
import { NewExpComponent } from './components/experience/new-exp/new-exp.component';
import { NewProjComponent } from './components/projects/new-proj/new-proj.component';
import { NewSklComponent } from './components/skills/new-skl/new-skl.component';
import { EditEduComponent } from './components/education/edit-edu/edit-edu.component';
import { EditExpComponent } from './components/experience/edit-exp/edit-exp.component';
import { EditProjComponent } from './components/projects/edit-proj/edit-proj.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    HeaderComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginComponent,
    AboutMeComponent,
    FooterComponent,
    PortfolioComponent,
    PruebasComponent,
    PruebasModalComponent,
    NewEduComponent,
    NewExpComponent,
    NewSklComponent,
    NewProjComponent,
    EditEduComponent,
    EditExpComponent,
    EditProjComponent,
    EditSkillsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
