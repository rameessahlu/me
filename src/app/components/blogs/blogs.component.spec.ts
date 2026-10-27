import { TestBed } from '@angular/core/testing';
import { BlogsComponent } from './blogs.component';

describe('Field notes filters', () => {
  it('combines text and topic filters and recovers from an empty result', async () => {
    TestBed.configureTestingModule({ imports: [BlogsComponent] });
    const fixture = TestBed.createComponent(BlogsComponent);
    const component = fixture.componentInstance;
    component.searchText = '  LEARNING  ';
    component.selectedTag = 'Career';
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.filteredPosts.length).toBe(1);

    component.searchText = 'no matching article';
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('No notes on this page.');
    const reset = fixture.nativeElement.querySelector('.entry button') as HTMLButtonElement;
    reset.click();
    fixture.detectChanges();
    expect(component.searchText).toBe('');
    expect(component.selectedTag).toBe('All');
    expect(fixture.nativeElement.querySelector('article h2').textContent).toContain('Learning Never Stops');
  });
});

