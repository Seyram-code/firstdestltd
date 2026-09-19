'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Building2, CheckCircle2, CircleDollarSign, Code2, Filter, MapPin, Package, Search, Ship, Truck, Users, Wind } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type Project = { title: string; category: string; status: 'Completed' | 'Ongoing'; location: string; description: string; image: string; icon?: typeof Building2 };

const projects: Project[] = [
  { title: 'Green View Residences', category: 'Real Estate', status: 'Completed', location: 'Accra, Ghana', description: 'A modern residential development offering quality and affordable housing with excellent amenities.', image: '/project-real-estate.jpg', icon: Building2 },
  { title: 'East Legon Commercial Complex', category: 'Construction', status: 'Ongoing', location: 'Accra, Ghana', description: 'A multi-purpose commercial complex designed to boost business and create opportunities.', image: '/project-construction.jpg', icon: Building2 },
  { title: 'Global Trade Facilitation Project', category: 'Trade & Commerce', status: 'Completed', location: 'Tema Port, Ghana', description: 'Streamlining international trade and supply chain solutions for our clients.', image: '/project-trade.jpg', icon: Ship },
  { title: 'National Distribution Network', category: 'Logistics', status: 'Ongoing', location: 'Ghana (Multiple Locations)', description: 'A reliable logistics network ensuring timely delivery across the country.', image: '/project-logistics.jpg', icon: Truck },
  { title: 'Business Management System', category: 'Technology', status: 'Completed', location: 'Accra, Ghana', description: 'A custom software solution to streamline business operations and improve efficiency.', image: '/project-software.jpg', icon: Code2 },
  { title: 'Renewable Energy Initiative', category: 'Others', status: 'Ongoing', location: 'Northern Region, Ghana', description: 'Supporting sustainable development through renewable energy solutions.', image: '/project-real-estate.jpg', icon: Wind },
];

const categories = ['All Projects', 'Construction', 'Real Estate', 'Logistics', 'Technology', 'Trade & Commerce', 'Others'];

export function ProjectsPageReference() {
  const [projectList, setProjectList] = useState(projects);
  const [category, setCategory] = useState('All Projects');
  const [query, setQuery] = useState('');
  useEffect(() => {
    const storedProjects = window.localStorage.getItem('firstdest-admin-projects');
    if (storedProjects) setProjectList(JSON.parse(storedProjects) as Project[]);
  }, []);
  const filteredProjects = useMemo(() => projectList.filter((project) => (category === 'All Projects' || project.category === category) && `${project.title} ${project.category} ${project.location}`.toLowerCase().includes(query.toLowerCase())), [category, query, projectList]);

  return (
    <main className="bg-white text-brand-900">
      <section className="relative isolate min-h-[285px] overflow-hidden bg-[#061d3d] text-white md:min-h-[340px]">
        <Image src="/projects-building.jpg" alt="First Dest building" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061d3d] via-[#061d3d]/85 to-[#061d3d]/15" />
        <div className="mx-auto flex min-h-[285px] max-w-7xl items-center px-6 py-12 md:min-h-[340px] md:px-10"><div className="max-w-2xl"><p className="mb-4 flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300"><span className="h-0.5 w-10 bg-amber-400" />Our Projects</p><h1 className="text-4xl font-extrabold leading-[1.03] tracking-[-0.05em] md:text-6xl">Delivering Results.<br /><span className="text-amber-300">Creating Value.</span></h1><p className="mt-5 max-w-xl text-sm leading-6 text-slate-100 md:text-base">Explore some of our completed and ongoing projects across various industries. Each project reflects our commitment to quality, innovation and sustainable growth.</p></div><div className="absolute bottom-10 right-8 hidden max-w-[175px] border-l-2 border-amber-300 pl-4 text-sm italic leading-6 text-white md:block">Turning Visions into<br />Real Opportunities.</div></div>
      </section>

      <div className="border-b border-slate-200 bg-[#f5f8fc]"><div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3 text-xs text-slate-600 md:px-10"><Link href="/" className="hover:text-brand-700">Home</Link><span className="text-slate-400">&gt;</span><span>Projects</span></div></div>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-10"><div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent-500"><span className="h-0.5 w-10 bg-amber-400" />Our Projects</p><h2 className="mt-1 text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">Featured Projects</h2><p className="mt-1 text-sm text-slate-600">A showcase of our work and the impact we create across different sectors.</p></div><label className="relative block w-full md:w-60"><Search className="absolute left-3 top-3 h-4 w-4 text-brand-900" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects..." className="h-10 w-full rounded border border-slate-300 pl-9 pr-3 text-sm outline-none focus:border-brand-700" /></label></div>
        <div className="mt-5 flex flex-wrap gap-3">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-md border px-5 py-2.5 text-xs font-bold transition ${category === item ? 'border-brand-900 bg-brand-900 text-white' : 'border-slate-200 bg-white text-brand-900 hover:border-brand-700'}`}><Filter className="mr-2 inline h-3 w-3" />{item}</button>)}</div>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filteredProjects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>{filteredProjects.length === 0 && <p className="py-12 text-center text-sm text-slate-500">No projects match your search.</p>}</section>

      <section className="border-y border-slate-200 bg-[#eff6fc] px-6 py-7 md:px-10"><div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4"><Stat icon={Package} value="20+" label="Projects Executed" /><Stat icon={Users} value="15+" label="Happy Clients" /><Stat icon={CircleDollarSign} value="10+" label="Industry Sectors" /><Stat icon={CheckCircle2} value="100%" label="Commitment to Quality" /></div></section>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) { const Icon = project.icon ?? (project.category === 'Logistics' ? Truck : project.category === 'Technology' ? Code2 : project.category === 'Trade & Commerce' ? Ship : Building2); return <article className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium"><div className="relative h-48"><Image src={project.image || '/projects-building.jpg'} alt={project.title} fill sizes="(max-width: 1280px) 50vw, 33vw" className="object-cover" /><span className="absolute left-4 top-4 rounded-md bg-amber-400 px-3 py-2 text-xs font-extrabold text-brand-900">{project.status}</span></div><div className="p-5"><div className="flex items-center gap-3 text-xs font-bold text-brand-700"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600"><Icon className="h-4 w-4" /></span>{project.category}</div><h3 className="mt-3 text-xl font-extrabold tracking-[-0.03em] text-brand-900">{project.title}</h3><p className="mt-2 flex items-center gap-2 text-xs text-slate-600"><MapPin className="h-4 w-4 text-amber-500" />{project.location}</p><p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p><button type="button" className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-brand-900">View Details <span aria-hidden="true">→</span></button></div></article>; }
function Stat({ icon: Icon, value, label }: { icon: typeof Package; value: string; label: string }) { return <div className="flex items-center justify-center gap-4 border-slate-200 sm:border-r last:border-0"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-brand-900"><Icon className="h-6 w-6" /></span><div><div className="text-2xl font-black text-brand-900">{value}</div><div className="text-xs text-slate-600">{label}</div></div></div>; }
