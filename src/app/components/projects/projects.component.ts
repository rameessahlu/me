import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NameToIconMapping, Projects } from 'src/app/models/projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: false,
})
export class ProjectsComponent implements OnInit {
  projects: any = Projects;
  nameToIcon: any = NameToIconMapping;

  constructor(private sanitizer: DomSanitizer) {
    this.projects.forEach((element) => {
      if (
        element.content.type == 'vid' &&
        typeof element.content.src == 'string'
      ) {
        element.content.src = this.sanitizer.bypassSecurityTrustResourceUrl(
          element.content.src,
        );
      }
    });
  }

  ngOnInit(): void {}
}
