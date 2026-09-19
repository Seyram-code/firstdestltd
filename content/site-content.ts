import { company } from '@/src/data/company';
import { futureFeatureModules } from '@/src/lib/content-types';

export type CompanyProfile = {
  name: string;
  address: string;
  email: string;
  phone: string;
  phoneHref: string;
  mission: string;
  vision: string;
  companyOverview: string;
};

export type ServiceEntry = {
  name: string;
  slug: string;
  description: string;
};

export type ProjectEntry = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  location: string;
  status: 'Upcoming' | 'Open' | 'Completed' | 'In Progress' | 'Pipeline';
  featuredImage?: string;
};

export type ArticleEntry = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  category: 'News' | 'Blog';
  featuredImage?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export type TestimonialEntry = {
  id: string;
  name: string;
  role: string;
  quote: string;
};

export type SiteContent = {
  company: CompanyProfile;
  values: Array<{ title: string; description: string }>;
  services: ServiceEntry[];
  projects: ProjectEntry[];
  news: ArticleEntry[];
  blogPosts: ArticleEntry[];
  team: TeamMember[];
  testimonials: TestimonialEntry[];
};

export const siteContent: SiteContent = {
  company: {
    name: company.name,
    address: company.address,
    email: company.email,
    phone: company.phone,
    phoneHref: company.phoneHref,
    mission: company.mission,
    vision: company.vision,
    companyOverview: company.companyOverview,
  },
  values: company.values,
  services: company.services,
  projects: [
    {
      id: 'project-placeholder-01',
      title: 'Project Placeholder',
      slug: 'project-placeholder-01',
      summary: 'This project entry is ready for verified project details when they become available.',
      category: 'Business Development',
      location: 'Location to be confirmed',
      status: 'Upcoming',
      featuredImage: '',
    },
    {
      id: 'project-placeholder-02',
      title: 'Opportunity Pipeline',
      slug: 'opportunity-pipeline',
      summary: 'This opportunity entry is structured for future business development updates and confirmed details.',
      category: 'Multiple sectors',
      location: 'Location to be confirmed',
      status: 'Pipeline',
      featuredImage: '',
    },
  ],
  news: [
    {
      id: 'news-placeholder-01',
      title: 'News Placeholder',
      slug: 'news-placeholder-01',
      excerpt: 'This news item is reserved for future approved company updates and business announcements.',
      publishedAt: '2026-01-01',
      category: 'News',
      featuredImage: '',
    },
  ],
  blogPosts: [
    {
      id: 'blog-placeholder-01',
      title: 'Blog Placeholder',
      slug: 'blog-placeholder-01',
      excerpt: 'This blog article is ready for future thought leadership content, insight, or business commentary.',
      publishedAt: '2026-01-01',
      category: 'Blog',
      featuredImage: '',
    },
  ],
  team: [
    {
      id: 'team-member-placeholder-01',
      name: 'Team Member',
      role: 'Role to be confirmed',
      bio: 'This team profile placeholder is ready for validated staff information and approved bios.',
      image: '',
    },
  ],
  testimonials: [
    {
      id: 'testimonial-placeholder-01',
      name: 'Client Name',
      role: 'Role or company to be confirmed',
      quote: 'This testimonial placeholder is reserved for approved client feedback once it is available.',
    },
  ],
};

export const cmsContent = {
  company: siteContent.company,
  services: siteContent.services,
  projects: siteContent.projects,
  news: siteContent.news,
  blogPosts: siteContent.blogPosts,
  team: siteContent.team,
  testimonials: siteContent.testimonials,
};

export const futureModules = futureFeatureModules;
