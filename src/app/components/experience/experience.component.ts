import { Component } from '@angular/core';
import { certifications } from '../../models/certifications.model';
import { professionalExperience, volunteerExperience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly certifications = certifications;
  readonly sections = [
    { id: 'professional', title: 'Professional experience', note: 'From the day job.', entries: professionalExperience },
    { id: 'volunteering', title: 'Volunteering', note: 'Time put towards something useful.', entries: volunteerExperience },
  ] as const;
}
