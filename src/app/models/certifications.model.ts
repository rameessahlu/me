export interface Certification {
  id: string;
  name: string;
  platform: string;
  issuer?: string;
  dateDetails?: string;
  url: string;
  validity?: string;
}

export const certifications: readonly Certification[] = [
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    platform: 'Microsoft Learn',
    url: 'https://learn.microsoft.com/en-us/users/rameessahlu/credentials/3962BE14CBA46515',
    validity: 'Aug 2026 to Aug 2028',
  },
  {
    id: 'ckad',
    name: 'CKAD: Certified Kubernetes Application Developer',
    issuer: 'The Linux Foundation',
    dateDetails: 'Issued May 2024 · Expired May 2026',
    platform: 'Credly',
    url: 'https://www.credly.com/badges/fc4f818a-a44c-4004-aa2e-4b3495fbc918/linked_in_profile',
  },
  {
    id: 'terraform-associate',
    name: 'HashiCorp Certified: Terraform Associate (003)',
    platform: 'Credly',
    url: 'https://www.credly.com/badges/561eec83-c998-4220-94ef-78dbf8b95d50',
    validity: 'Mar 2024 to Mar 2026',
  },
];
