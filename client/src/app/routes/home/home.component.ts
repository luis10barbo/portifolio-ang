import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProjetoServiceService } from '../../service/projeto/projeto-service.service';
import { ProjetoType } from '../../model/projetoModel';
import { CarrosselProjetosComponent } from "../../components/carrossel-projetos/carrossel-projetos.component";
import { SkillCategory, SkillType } from '../../model/skillModel';
import { SkillService } from '../../service/skill/skill-service.service';
import { NgFor } from '@angular/common';
import { enviroment } from '../../../environment';
import { SkillHolderComponent } from "../../components/skill-holder/skill-holder.component";

@Component({
  selector: 'home-root',
  imports: [RouterOutlet, TranslateModule, CarrosselProjetosComponent, SkillHolderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class AppComponent {
  title = 'portifolio';
  projects: ProjetoType[] = [];
  skills: SkillType[] = [];
  skillByCategory: {[key in SkillCategory]: SkillType[]} = {DATABASE: [], FRAMEWORK: [], LANGUAGE: [], OPERATIONAL_SYSTEM: [], VERSIONING: []};

  urlImagens = `${enviroment.urlBackend}/image?id=`;

  constructor(private translate: TranslateService, private projetoService: ProjetoServiceService, private skillService: SkillService) {
    // this.translate.setDefaultLang("pt");
    this.projetoService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
    this.skillService.getSkills().subscribe((skills) => {
      this.skills = skills;
      this.sortSkillsByCategory(skills);
    })
  }

  public sortSkillsByCategory(skills: SkillType[]) {
    skills.forEach((skill) => {
      this.skillByCategory[skill.category].push(skill);
    }) 
  }

  public t(str: string) {
    return this.translate.instant(`Index.${str}`);
  }
}
