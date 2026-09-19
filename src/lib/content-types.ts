export type ContentStatus = 'draft' | 'published' | 'archived';

export type CmsEntity = {
  id: string;
  slug: string;
  title: string;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
};

export type FutureFeatureModule = {
  key: string;
  label: string;
  enabled: boolean;
  route: string;
  notes?: string;
};

export const futureFeatureModules: FutureFeatureModule[] = [
  { key: 'admin-dashboard', label: 'Admin dashboard', enabled: false, route: '/admin', notes: 'Central workspace for content, leads, and operations.' },
  { key: 'project-management', label: 'Project management', enabled: false, route: '/projects/manage', notes: 'Track opportunities, milestones, and internal workflows.' },
  { key: 'blog-news', label: 'Blog and news', enabled: false, route: '/news', notes: 'Publish updates, announcements, and insights.' },
  { key: 'careers', label: 'Careers', enabled: false, route: '/careers', notes: 'List openings and candidate submissions.' },
  { key: 'service-requests', label: 'Online service requests', enabled: false, route: '/service-requests', notes: 'Capture client requests and workflow intake.' },
  { key: 'client-portal', label: 'Client portal', enabled: false, route: '/portal', notes: 'Secure client account and service tracking.' },
  { key: 'quote-requests', label: 'Quote requests', enabled: false, route: '/quote-request', notes: 'Gather project requirements and estimate requests.' },
  { key: 'newsletter', label: 'Newsletter', enabled: false, route: '/newsletter', notes: 'Mailing list and outbound updates.' },
  { key: 'crm-integration', label: 'CRM integration', enabled: false, route: '/crm', notes: 'Sync contacts and lead data to external systems.' },
  { key: 'whatsapp-integration', label: 'WhatsApp integration', enabled: false, route: '/whatsapp', notes: 'Support messaging and lead follow-up.' },
  { key: 'email-notifications', label: 'Email notifications', enabled: false, route: '/notifications', notes: 'Automated alerts for enquiries and updates.' },
];

export const defaultCmsContent = {
  company: {
    id: 'company-profile',
    slug: 'company-profile',
    title: 'Company profile',
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  services: {
    id: 'service-catalog',
    slug: 'service-catalog',
    title: 'Service catalog',
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  projects: {
    id: 'project-catalog',
    slug: 'project-catalog',
    title: 'Project catalog',
    status: 'draft',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  blog: {
    id: 'blog-catalog',
    slug: 'blog-catalog',
    title: 'Blog and news catalog',
    status: 'draft',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
};
