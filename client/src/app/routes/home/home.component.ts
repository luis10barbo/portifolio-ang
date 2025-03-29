import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProjetoServiceService } from '../../service/projeto/projeto-service.service';
import { ProjetoType } from '../../model/projetoModel';
import { CarrosselProjetosComponent } from "../../components/carrossel-projetos/carrossel-projetos.component";

@Component({
  selector: 'home-root',
  imports: [RouterOutlet, TranslateModule, CarrosselProjetosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class AppComponent {
  title = 'portifolio';
  projects: ProjetoType[] = []

  constructor(private translate: TranslateService, private projetoService: ProjetoServiceService) {
    this.translate.setDefaultLang("pt");
    this.projetoService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  public t(str: string) {
    return this.translate.instant(`Index.${str}`);
  }
}
