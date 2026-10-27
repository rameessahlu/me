import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Posts } from '../../models/blogs.model';

@Component({
  selector: 'app-blog-list',
  imports: [DatePipe, FormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  readonly posts = Posts;
  searchText = '';
  selectedTag = 'All';
  readonly allTags = ['All', ...new Set(Posts.flatMap(post => post.tags).sort())];

  get filteredPosts() {
    const search = this.searchText.trim().toLowerCase();
    return this.posts.filter(post =>
      (this.selectedTag === 'All' || post.tags.includes(this.selectedTag)) &&
      (post.title + ' ' + post.content + ' ' + post.tags.join(' ')).toLowerCase().includes(search),
    ).sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));
  }

  resetFilters(): void { this.searchText = ''; this.selectedTag = 'All'; }
}
