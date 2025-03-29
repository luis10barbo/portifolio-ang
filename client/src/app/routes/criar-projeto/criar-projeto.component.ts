import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjetoServiceService } from '../../service/projeto/projeto-service.service';
import { ProjetoStatus } from '../../model/projetoModel';
import { ImageServiceService } from '../../service/image/image-service.service';

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
  @ViewChild("imagesInput") imagesInput!: ElementRef<HTMLInputElement>;
  
  images: {file: File, blob: string}[] = [];
  
  constructor(private projetoService: ProjetoServiceService, private imageService: ImageServiceService) {
  }
  
  onChangeImages(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    this.images = [];
    if (!files || files.length < 1) {
      return;
    }
    
    this.images = Object.values(files).map((image) => {
      return {
        file: image,
        blob: window.URL.createObjectURL(image)
      };
    })
  }
  public clickSubmit() {
    this.imageService.saveImages(this.images).subscribe((images) => {
      this.projetoService.criarProjeto({
        name: this.inputNome.nativeElement.value,
        description: this.descriptionInput.nativeElement.value,
        download: this.downloadInput.nativeElement.value,
        repo: this.repoInput.nativeElement.value,
        website: this.websiteInput.nativeElement.value,
        techBack: [],
        techFront: [],
        images: images,
        status: this.statusSelect.nativeElement.value as ProjetoStatus
      }).subscribe();
    });
  }
}
