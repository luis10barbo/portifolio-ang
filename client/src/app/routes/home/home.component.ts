import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
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
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'home-root',
  imports: [RouterOutlet, TranslateModule, CarrosselProjetosComponent, SkillHolderComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class AppComponent {
  title = 'portifolio';
  projects: ProjetoType[] = [];
  skills: SkillType[] = [];
  skillByCategory: {[key in SkillCategory]: SkillType[]} = {DATABASE: [], FRAMEWORK: [], LANGUAGE: [], OPERATIONAL_SYSTEM: [], VERSIONING: []};

  urlImagens = `${enviroment.urlBackend}/image?id=`;

  @ViewChild("backgroundFillerText") backgroundFillerText!: ElementRef<HTMLParagraphElement>;

  constructor(private translate: TranslateService, private projetoService: ProjetoServiceService, private skillService: SkillService) {
    this.translate.setDefaultLang("pt");
    this.projetoService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
    this.skillService.getSkills().subscribe((skills) => {
      this.skills = skills;
      this.sortSkillsByCategory(skills);
    })
  }

  public afterREnder() {
    this.setFillerText();
  }

  public setFillerText() {
    this.backgroundFillerText.nativeElement.textContent = `<div class="container"><h1 onclick="alert('Hello World!')">Click Me</h1><p id="text">This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p><button onclick="document.getElementById('text').style.color='red'">Change Color</button><script>function randomNumber(){return Math.floor(Math.random()*100);}console.log("Random number: "+randomNumber());document.addEventListener("DOMContentLoaded",function(){document.body.style.backgroundColor="#f0f0f0";});</script></div></em> text.</p><button </em> text.</p><button onclick="document.getElementById('text').style.color='red'">Change Color</button><script>function raonclick="document.getElementById('text').style.color='red'">Change Color</button><script>function ra`
  }

  public sortSkillsByCategory(skills: SkillType[]) {
    skills.forEach((skill) => {
      this.skillByCategory[skill.category].push(skill);
    }) 
  }

}
