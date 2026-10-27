import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

describe('Paper portfolio navigation and preferences', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ imports: [AppComponent], providers: [provideRouter(routes)] });
  });
  afterEach(() => localStorage.clear());

  it('keeps chapter state, navigation links and progress in sync with direct routes', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/blogs?topic=learning');
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.componentInstance.currentChapter()).toBe(2);
    expect(fixture.componentInstance.progress).toBe(75);
    expect(fixture.nativeElement.querySelector('.masthead [aria-current="page"]').textContent.trim()).toBe('Notes');
    expect(fixture.nativeElement.querySelector('main h1').textContent).toContain('Notes from');
    expect(fixture.componentInstance.chapterPath(1)).toBe('/contact');

    await router.navigateByUrl('/contact');
    await fixture.whenStable();
    expect(fixture.componentInstance.chapterPath(1)).toBe('/about');
    expect(fixture.componentInstance.progress).toBe(100);
  });

  it('redirects missing pages to the introduction', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    await TestBed.inject(Router).navigateByUrl('/missing-page');
    await fixture.whenStable();
    expect(TestBed.inject(Router).url).toBe('/about');
    expect(fixture.componentInstance.currentChapter()).toBe(0);
  });

  it('clamps reading size and restores preferences when the app is recreated', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.changeFontSize(50);
    expect(app.fontSize()).toBe(24);
    app.changeFontSize(-50);
    expect(app.fontSize()).toBe(16);
    app.togglePaper();
    app.toggleContrast();
    fixture.destroy();
    const restored = TestBed.createComponent(AppComponent).componentInstance;
    expect(restored.fontSize()).toBe(16);
    expect(restored.coolPaper()).toBe(true);
    expect(restored.highContrast()).toBe(true);
  });

  it('remains usable with malformed saved preferences', () => {
    localStorage.setItem('paper-preferences', '{broken');
    const app = TestBed.createComponent(AppComponent).componentInstance;
    expect(app.fontSize()).toBe(19);
    expect(app.coolPaper()).toBe(false);
  });

  it('does not navigate when arrow keys are used in a text input', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const navigate = vi.spyOn(TestBed.inject(Router), 'navigateByUrl');
    const input = document.createElement('input');
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    Object.defineProperty(event, 'target', { value: input });
    fixture.componentInstance.onKeydown(event);
    expect(navigate).not.toHaveBeenCalled();
  });
});
