import { Component, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { chapters } from './models/chapters.model';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly chapters = chapters;
  readonly year = new Date().getFullYear();
  readonly currentChapter = signal(0);
  readonly appearanceOpen = signal(false);
  readonly fontSize = signal(19);
  readonly coolPaper = signal(false);
  readonly highContrast = signal(false);
  readonly appearanceButton = viewChild<ElementRef<HTMLButtonElement>>('appearanceButton');
  private readonly router = inject(Router);

  constructor() {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem('paper-preferences') ?? 'null');
      if (saved && typeof saved === 'object') {
        const prefs = saved as Record<string, unknown>;
        if (typeof prefs['fontSize'] === 'number' && Number.isFinite(prefs['fontSize'])) {
          this.fontSize.set(Math.min(24, Math.max(16, prefs['fontSize'])));
        }
        this.coolPaper.set(prefs['coolPaper'] === true);
        this.highContrast.set(prefs['highContrast'] === true);
      }
    } catch { /* Reading preferences are optional when browser storage is unavailable. */ }

    this.router.events.pipe(takeUntilDestroyed()).subscribe(event => {
      if (event instanceof NavigationEnd) {
        const path = event.urlAfterRedirects.split(/[?#]/)[0];
        this.currentChapter.set(Math.max(0, chapters.findIndex(chapter => chapter.path === path)));
        this.appearanceOpen.set(false);
      }
    });
  }

  get progress(): number { return (this.currentChapter() + 1) / this.chapters.length * 100; }

  chapterPath(offset: number): string {
    return this.chapters[(this.currentChapter() + offset + this.chapters.length) % this.chapters.length].path;
  }

  changeFontSize(delta: number): void {
    this.fontSize.update(value => Math.min(24, Math.max(16, value + delta)));
    this.savePreferences();
  }

  togglePaper(): void { this.coolPaper.update(value => !value); this.savePreferences(); }
  toggleContrast(): void { this.highContrast.update(value => !value); this.savePreferences(); }

  focusChapter(): void {
    requestAnimationFrame(() => document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true }));
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.appearanceOpen()) {
      this.appearanceOpen.set(false);
      this.appearanceButton()?.nativeElement.focus();
    }
    // Keep arrow keys native inside text fields, links and reader controls.
    if (event.target !== document.body || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      void this.router.navigateByUrl(this.chapterPath(event.key === 'ArrowRight' ? 1 : -1));
    }
  }

  private savePreferences(): void {
    try {
      localStorage.setItem('paper-preferences', JSON.stringify({
        fontSize: this.fontSize(), coolPaper: this.coolPaper(), highContrast: this.highContrast(),
      }));
    } catch { /* Controls still work for this visit without persistent storage. */ }
  }
}
