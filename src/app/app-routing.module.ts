import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: 'about',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },

  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
