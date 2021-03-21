import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TabDetails } from './models/tabs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'me';

  tabDetails = TabDetails;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.tabDetails.forEach((element) => {
          if (val.url.includes(element.url)) {
            element.selected = true;
            return true;
          } else {
            element.selected = false;
          }
        });
      }
    });
  }
}
