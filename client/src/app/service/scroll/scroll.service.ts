import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollLocked = false;

  lockScroll(): void {
    if (!this.scrollLocked) {
      document.body.style.overflow = 'hidden';
      this.scrollLocked = true;
    }
  }

  unlockScroll(): void {
    if (this.scrollLocked) {
      document.body.style.overflow = '';
      this.scrollLocked = false;
    }
  }
}