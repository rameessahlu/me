import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'about', title: 'Ramees Sahlu | Cloud, DevOps & the web', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'experience', title: 'Career timeline | Ramees Sahlu', loadComponent: () => import('./components/experience/experience.component').then(m => m.ExperienceComponent) },
  { path: 'projects', redirectTo: 'experience', pathMatch: 'full' },
  { path: 'blogs', title: 'Field notes | Ramees Sahlu', loadComponent: () => import('./components/blogs/blogs.component').then(m => m.BlogsComponent) },
  { path: 'contact', title: 'Say hello | Ramees Sahlu', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '**', redirectTo: 'about' },
];

