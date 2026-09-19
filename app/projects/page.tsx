import type { Metadata } from 'next';
import { ProjectsPageReference } from '@/components/projects-page-reference';

export const metadata: Metadata = {
  title: 'Projects | First Dest Company Limited',
  description: 'Review opportunity areas and project-focused business activities supported by First Dest Company Limited.',
};

export default function ProjectsPage() {
  return <ProjectsPageReference />;
}
