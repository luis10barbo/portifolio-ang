import { Component, HostListener, Input } from '@angular/core';
import { ProjetoType } from '../../model/projetoModel';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollService } from '../../service/scroll/scroll.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrossel-projetos',
  imports: [RouterLink, TranslateModule],
  templateUrl: './carrossel-projetos.component.html',
  styleUrl: './carrossel-projetos.component.scss'
})
export class CarrosselProjetosComponent {

  @Input("projects")
  projects: ProjetoType[] = [];

  iProjetoAtual = 0;
  nextInterval: any;
  intervalo = 0;
  isTouching = false;
  isDragging = false;
  posInicialDrag = { x: 0, y: 0 };
  posAtualDrag = 0;
  tempoParaTrocar = 5000;

  constructor(
    private translate: TranslateService,
    private scroll: ScrollService,
  ) {
    this.translate.setDefaultLang("pt");
  }

  ngOnInit(): void {
    this.criarIntervalo();
  }

  ngOnDestroy(): void {
    this.pararIntervalo();
  }

  proximoProjeto(): void {
    this.intervalo = 0;
    this.iProjetoAtual = (this.iProjetoAtual + 1) % this.projects.length;
  }

  anteriorProjeto(): void {
    this.intervalo = 0;
    this.iProjetoAtual =
      this.iProjetoAtual === 0 ? this.projects.length - 1 : this.iProjetoAtual - 1;
  }

  pararIntervalo(): void {
    clearInterval(this.nextInterval);
  }

  criarIntervalo(): void {
    // this.pararIntervalo();
    // const delay = 100;
    // this.nextInterval = setInterval(() => {
    //   this.intervalo += delay;
    //   if (this.intervalo >= this.tempoParaTrocar) {
    //     this.proximoProjeto();
    //     this.intervalo = 0;
    //   }
    // }, delay);
  }

  onTouchStart(event: TouchEvent): void {
    this.pararIntervalo();
    this.posInicialDrag = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    this.posAtualDrag = event.touches[0].clientX;
    this.isTouching = true;
    this.scroll.lockScroll();
  }

  @HostListener('window:touchmove', ['$event'])
  touchMoveEvent(event: TouchEvent): void {
    if (this.isTouching) {
      this.posAtualDrag = event.touches[0].clientX;
    }
  }

  @HostListener('window:touchend')
  onTouchEnd(): void {
    this.isTouching = false;
    const diffParaMudar = 100;
    const diff = this.posAtualDrag - this.posInicialDrag.x;

    if (this.isDragging) {
      if (diff > diffParaMudar) {
        this.anteriorProjeto();
      } else if (diff < -diffParaMudar) {
        this.proximoProjeto();
      }
    }
    this.isDragging = false;
    this.scroll.unlockScroll();
    this.posAtualDrag = 0;
    this.posInicialDrag = { x: 0, y: 0 };
    this.criarIntervalo();
  }
}
