import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjetoServiceService } from '../../service/projeto/projeto-service.service';
import { ProjetoStatus } from '../../model/projetoModel';

@Component({
  selector: 'app-criar-projeto',
  imports: [],
  templateUrl: './criar-projeto.component.html',
  styleUrl: './criar-projeto.component.scss'
})
export class CriarProjetoComponent {
  @ViewChild("nameInput") inputNome!: ElementRef<HTMLInputElement>;
  @ViewChild("descriptionInput") descriptionInput!: ElementRef<HTMLInputElement>;
  @ViewChild("repoInput") repoInput!: ElementRef<HTMLInputElement>;
  @ViewChild("websiteInput") websiteInput!: ElementRef<HTMLInputElement>;
  @ViewChild("downloadInput") downloadInput!: ElementRef<HTMLInputElement>;
  @ViewChild("statusSelect") statusSelect!: ElementRef<HTMLSelectElement>;

  constructor(private projetoService: ProjetoServiceService) {
  }

  public clickSubmit() {
    this.projetoService.criarProjeto({
      name: this.inputNome.nativeElement.value,
      description: this.descriptionInput.nativeElement.value,
      download: this.downloadInput.nativeElement.value,
      repo: this.repoInput.nativeElement.value,
      website: this.websiteInput.nativeElement.value,
      techBack: [],
      techFront: [],
      images: [],
      status: this.statusSelect.nativeElement.value as ProjetoStatus
    }).subscribe();
  }
}
