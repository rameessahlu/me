import {
  Component,
  OnInit,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
import { Posts } from 'src/app/models/blogs.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  standalone: false,
})
export class BlogsComponent implements OnInit, AfterViewInit {
  posts: any = Posts;
  searchText = '';
  selectedTag = 'All';
  @ViewChildren('yearRef') yearRefs!: QueryList<ElementRef>;

  get allTags(): string[] {
    const tags = new Set<string>();
    this.posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return ['All', ...Array.from(tags).sort()];
  }

  get filteredPosts() {
    const lowerSearch = this.searchText.toLowerCase();
    return this.posts
      .filter(
        (post) =>
          (this.selectedTag === 'All' ||
            post.tags.includes(this.selectedTag)) &&
          (post.title.toLowerCase().includes(lowerSearch) ||
            post.content.toLowerCase().includes(lowerSearch)),
      )
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  ngOnInit(): void {}

  isFirstPostOfYear(index: number, year: number): boolean {
    if (index === 0) return true;
    return this.filteredPosts[index - 1].date.getFullYear() !== year;
  }

  private yearLabelPositions = new Map<number, number>();

  getYearLabelPosition(index: number): number {
    // Return the top offset for the year label for a given post index
    return this.yearLabelPositions.get(index) || 0;
  }

  ngAfterViewInit(): void {
    // Calculate vertical positions for year labels relative to posts
    setTimeout(() => {
      this.yearLabelPositions.clear();
      this.yearRefs.forEach((ref, i) => {
        if (
          this.isFirstPostOfYear(i, this.filteredPosts[i].date.getFullYear())
        ) {
          const offsetTop = ref.nativeElement.offsetTop;
          this.yearLabelPositions.set(i, offsetTop);
        }
      });
    });
  }
}
