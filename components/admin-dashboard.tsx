'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FileImage, Globe2, ImagePlus, LayoutDashboard, Link2, Mail, Save, Settings2, Share2, Sparkles, Trash2 } from 'lucide-react';
import { company } from '@/src/data/company';

type AdminSettings = {
  contact: { address: string; phone: string; email: string; workingHours: string };
  social: { linkedin: string; facebook: string; instagram: string; x: string };
  images: { hero: string; about: string; services: string; footer: string };
};

type Post = { id: string; title: string; category: 'Blog' | 'News'; status: 'Draft' | 'Published'; date: string; excerpt: string; featuredImage?: string };
type AdminProject = { id: string; title: string; category: string; status: 'Completed' | 'Ongoing'; location: string; description: string; image: string };
type UrlSubmission = { url: string; submittedAt: string };

const defaultSettings: AdminSettings = {
  contact: { address: company.address, phone: company.phone, email: company.email, workingHours: 'Monday - Friday, 9:00 AM - 5:00 PM' },
  social: { linkedin: '', facebook: '', instagram: '', x: '' },
  images: { hero: '/about-building.jpg', about: '/company-building.jpg', services: '/service-finance.jpg', footer: '/services-cityscape.jpg' },
};

const defaultPosts: Post[] = [{ id: 'welcome', title: 'Welcome to First Dest', category: 'News', status: 'Draft', date: new Date().toISOString().slice(0, 10), excerpt: 'Share your latest company update, announcement, or business insight here.' }];
const defaultProjects: AdminProject[] = [
  { id: 'green-view', title: 'Green View Residences', category: 'Real Estate', status: 'Completed', location: 'Accra, Ghana', description: 'A modern residential development offering quality and affordable housing with excellent amenities.', image: '/project-real-estate.jpg' },
  { id: 'east-legon', title: 'East Legon Commercial Complex', category: 'Construction', status: 'Ongoing', location: 'Accra, Ghana', description: 'A multi-purpose commercial complex designed to boost business and create opportunities.', image: '/project-construction.jpg' },
  { id: 'trade-project', title: 'Global Trade Facilitation Project', category: 'Trade & Commerce', status: 'Completed', location: 'Tema Port, Ghana', description: 'Streamlining international trade and supply chain solutions for our clients.', image: '/project-trade.jpg' },
];

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [accessState, setAccessState] = useState<'loading' | 'setup' | 'locked' | 'unlocked'>('loading');
  const [accessCode, setAccessCode] = useState('');
  const [accessError, setAccessError] = useState('');
  const [settings, setSettings] = useState<AdminSettings>(defaultSettings);
  const [posts, setPosts] = useState<Post[]>(defaultPosts);
  const [projects, setProjects] = useState<AdminProject[]>(defaultProjects);
  const [saved, setSaved] = useState(false);
  const [postForm, setPostForm] = useState({ title: '', category: 'Blog' as Post['category'], excerpt: '', featuredImage: '' });
  const [projectForm, setProjectForm] = useState<Omit<AdminProject, 'id'>>({ title: '', category: 'Construction', status: 'Ongoing', location: '', description: '', image: '' });
  const [urlSubmissions, setUrlSubmissions] = useState<UrlSubmission[]>([]);

  useEffect(() => {
    const storedSettings = window.localStorage.getItem('firstdest-admin-settings');
    const storedPosts = window.localStorage.getItem('firstdest-admin-posts');
    const storedProjects = window.localStorage.getItem('firstdest-admin-projects');
    const storedUrlSubmissions = window.localStorage.getItem('firstdest-url-submissions');
    setAccessState(window.localStorage.getItem('firstdest-admin-access-code') ? 'locked' : 'setup');
    if (storedSettings) setSettings(JSON.parse(storedSettings) as AdminSettings);
    if (storedPosts) setPosts(JSON.parse(storedPosts) as Post[]);
    if (storedProjects) setProjects(JSON.parse(storedProjects) as AdminProject[]);
    if (storedUrlSubmissions) setUrlSubmissions(JSON.parse(storedUrlSubmissions) as UrlSubmission[]);
  }, []);

  const saveAccessCode = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (accessCode.trim().length < 6) {
      setAccessError('Use at least 6 characters for the access code.');
      return;
    }
    window.localStorage.setItem('firstdest-admin-access-code', accessCode.trim());
    setAccessCode('');
    setAccessError('');
    setAccessState('unlocked');
  };

  const unlock = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (accessCode === window.localStorage.getItem('firstdest-admin-access-code')) {
      setAccessCode('');
      setAccessError('');
      setAccessState('unlocked');
    } else {
      setAccessError('That access code is not correct.');
    }
  };

  const saveSettings = () => {
    window.localStorage.setItem('firstdest-admin-settings', JSON.stringify(settings));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2400);
  };

  const updateContact = (field: keyof AdminSettings['contact'], value: string) => setSettings((current) => ({ ...current, contact: { ...current.contact, [field]: value } }));
  const updateSocial = (field: keyof AdminSettings['social'], value: string) => setSettings((current) => ({ ...current, social: { ...current.social, [field]: value } }));
  const updateImage = (field: keyof AdminSettings['images'], value: string) => setSettings((current) => ({ ...current, images: { ...current.images, [field]: value } }));

  const handleImageFile = (field: keyof AdminSettings['images'], event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => updateImage(field, String(reader.result));
    reader.readAsDataURL(file);
  };

  const createPost = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!postForm.title.trim() || !postForm.excerpt.trim()) return;
    const nextPosts = [{ id: crypto.randomUUID(), ...postForm, status: 'Draft' as const, date: new Date().toISOString().slice(0, 10) }, ...posts];
    setPosts(nextPosts);
    window.localStorage.setItem('firstdest-admin-posts', JSON.stringify(nextPosts));
    setPostForm({ title: '', category: 'Blog', excerpt: '', featuredImage: '' });
  };

  const deletePost = (id: string) => {
    const nextPosts = posts.filter((post) => post.id !== id);
    setPosts(nextPosts);
    window.localStorage.setItem('firstdest-admin-posts', JSON.stringify(nextPosts));
  };

  const saveProject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!projectForm.title.trim() || !projectForm.description.trim()) return;
    const nextProjects = [{ id: crypto.randomUUID(), ...projectForm }, ...projects];
    setProjects(nextProjects);
    window.localStorage.setItem('firstdest-admin-projects', JSON.stringify(nextProjects));
    setProjectForm({ title: '', category: 'Construction', status: 'Ongoing', location: '', description: '', image: '' });
  };

  const deleteProject = (id: string) => {
    const nextProjects = projects.filter((project) => project.id !== id);
    setProjects(nextProjects);
    window.localStorage.setItem('firstdest-admin-projects', JSON.stringify(nextProjects));
  };

  const submitUrl = async (url: string) => {
    const response = await fetch('/api/submit-url', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url }) });
    const result = (await response.json()) as { error?: string; success?: boolean; submittedAt?: string; url?: string };
    if (!response.ok || !result.success || !result.submittedAt || !result.url) throw new Error(result.error ?? 'Unable to submit this URL.');
    const nextSubmissions = [{ url: result.url, submittedAt: result.submittedAt }, ...urlSubmissions].slice(0, 20);
    setUrlSubmissions(nextSubmissions);
    window.localStorage.setItem('firstdest-url-submissions', JSON.stringify(nextSubmissions));
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'contact', label: 'Contact Details', icon: Mail },
    { id: 'images', label: 'Site Images', icon: ImagePlus },
    { id: 'projects', label: 'Projects', icon: Globe2 },
    { id: 'social', label: 'Social Media', icon: Share2 },
    { id: 'posts', label: 'Posts & Blog', icon: Sparkles },
    { id: 'urls', label: 'Submit URLs', icon: Link2 },
  ];

  if (accessState === 'loading') return <main className="flex min-h-screen items-center justify-center bg-[#f3f6fa] text-center text-sm text-slate-600"><h1>Checking admin access...</h1></main>;

  if (accessState !== 'unlocked') return <AccessGate mode={accessState} accessCode={accessCode} setAccessCode={setAccessCode} accessError={accessError} onSubmit={accessState === 'setup' ? saveAccessCode : unlock} />;

  return (
    <main className="min-h-screen bg-[#f3f6fa] text-slate-900">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="w-full bg-[#061d3d] p-5 text-white lg:w-72 lg:p-7">
          <div className="flex items-center gap-3 border-b border-white/10 pb-6"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 font-black text-brand-900">FD</div><div><div className="text-sm font-black tracking-[0.12em]">FIRST DEST</div><div className="text-[10px] text-slate-300">Site admin</div></div></div>
          <nav className="mt-6 grid gap-2 sm:grid-cols-2 lg:block">
            {tabs.map(({ id, label, icon: Icon }) => <button key={id} type="button" onClick={() => setActiveTab(id)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold transition ${activeTab === id ? 'bg-amber-400 text-brand-900' : 'text-slate-200 hover:bg-white/10'}`}><Icon className="h-4 w-4" />{label}</button>)}
          </nav>
          <a href="/" className="mt-8 hidden text-xs font-bold text-amber-300 hover:text-white lg:block">View live site →</a>
        </aside>

        <section className="flex-1 p-5 md:p-8 lg:p-12">
          <header className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-600">Control centre</p><h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-brand-900">Manage your website</h1><p className="mt-2 text-sm text-slate-600">Update the details your visitors see across First Dest.</p></div><button type="button" onClick={saveSettings} className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-900 px-5 py-3 text-sm font-bold text-white hover:bg-brand-700"><Save className="h-4 w-4" />{saved ? 'Saved' : 'Save settings'}</button></header>

          {activeTab === 'overview' && <Overview posts={posts} setTab={setActiveTab} />}
          {activeTab === 'contact' && <SettingsCard title="Contact details" description="These details appear in the header, contact page, and footer."><div className="grid gap-5 md:grid-cols-2"><AdminField label="Office address" value={settings.contact.address} onChange={(value) => updateContact('address', value)} /><AdminField label="Phone number" value={settings.contact.phone} onChange={(value) => updateContact('phone', value)} /><AdminField label="Email address" type="email" value={settings.contact.email} onChange={(value) => updateContact('email', value)} /><AdminField label="Working hours" value={settings.contact.workingHours} onChange={(value) => updateContact('workingHours', value)} /></div></SettingsCard>}
          {activeTab === 'social' && <SettingsCard title="Social media pages" description="Add full profile URLs. Empty fields stay hidden from public social links."><div className="grid gap-5 md:grid-cols-2"><AdminField label="LinkedIn" placeholder="https://linkedin.com/company/..." value={settings.social.linkedin} onChange={(value) => updateSocial('linkedin', value)} /><AdminField label="Facebook" placeholder="https://facebook.com/..." value={settings.social.facebook} onChange={(value) => updateSocial('facebook', value)} /><AdminField label="Instagram" placeholder="https://instagram.com/..." value={settings.social.instagram} onChange={(value) => updateSocial('instagram', value)} /><AdminField label="X / Twitter" placeholder="https://x.com/..." value={settings.social.x} onChange={(value) => updateSocial('x', value)} /></div></SettingsCard>}
          {activeTab === 'images' && <ImageSettings settings={settings} updateImage={updateImage} handleImageFile={handleImageFile} />}
          {activeTab === 'projects' && <ProjectsSettings projects={projects} projectForm={projectForm} setProjectForm={setProjectForm} saveProject={saveProject} deleteProject={deleteProject} />}
          {activeTab === 'posts' && <PostsSettings posts={posts} postForm={postForm} setPostForm={setPostForm} createPost={createPost} deletePost={deletePost} />}
          {activeTab === 'urls' && <UrlSubmissionSettings submissions={urlSubmissions} submitUrl={submitUrl} />}
        </section>
      </div>
    </main>
  );
}

function AccessGate({ mode, accessCode, setAccessCode, accessError, onSubmit }: { mode: 'setup' | 'locked'; accessCode: string; setAccessCode: (value: string) => void; accessError: string; onSubmit: (event: FormEvent<HTMLFormElement>) => void }) {
  const isSetup = mode === 'setup';
  return <main className="flex min-h-screen items-center justify-center bg-[#061d3d] px-5 py-10"><div className="w-full max-w-md rounded-2xl border border-white/10 bg-white p-7 shadow-2xl md:p-9"><div className="mb-7 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-lg font-black text-brand-900">FD</div><div><div className="text-sm font-black tracking-[0.12em] text-brand-900">FIRST DEST</div><div className="text-xs text-slate-500">Website admin</div></div></div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-600">Admin access</p><h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-brand-900">{isSetup ? 'Create your access code' : 'Enter access code'}</h1><p className="mt-3 text-sm leading-6 text-slate-600">{isSetup ? 'Create a private code to protect this admin page on this browser.' : 'This page is protected. Enter the access code created by the administrator.'}</p><form onSubmit={onSubmit} className="mt-6 space-y-4"><label className="block text-sm font-bold text-brand-900">Access code<input type="password" value={accessCode} onChange={(event) => setAccessCode(event.target.value)} minLength={6} required autoFocus className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 outline-none focus:border-brand-700 focus:ring-4 focus:ring-amber-100" placeholder="At least 6 characters" /></label>{accessError && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{accessError}</p>}<button type="submit" className="w-full rounded-lg bg-amber-400 px-5 py-3 font-bold text-brand-900 hover:bg-amber-300">{isSetup ? 'Create code and continue' : 'Unlock admin'}</button></form><a href="/" className="mt-5 block text-center text-sm font-bold text-brand-700 hover:text-brand-900">Return to live site</a></div></main>;
}

function Overview({ posts, setTab }: { posts: Post[]; setTab: (tab: string) => void }) {
  return <div className="grid gap-5 md:grid-cols-3"><OverviewCard label="Published posts" value={posts.filter((post) => post.status === 'Published').length} /><OverviewCard label="Draft posts" value={posts.filter((post) => post.status === 'Draft').length} /><OverviewCard label="Editable image slots" value={4} /><div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-3"><div className="flex items-start justify-between gap-4"><div><h2 className="text-xl font-extrabold text-brand-900">Quick actions</h2><p className="mt-1 text-sm text-slate-600">Keep the public site current from one place.</p></div><Settings2 className="h-6 w-6 text-amber-500" /></div><div className="mt-5 flex flex-wrap gap-3"><button type="button" onClick={() => setTab('contact')} className="rounded-lg bg-slate-100 px-4 py-3 text-sm font-bold text-brand-900 hover:bg-slate-200">Update contact details</button><button type="button" onClick={() => setTab('images')} className="rounded-lg bg-slate-100 px-4 py-3 text-sm font-bold text-brand-900 hover:bg-slate-200">Change site images</button><button type="button" onClick={() => setTab('posts')} className="rounded-lg bg-amber-400 px-4 py-3 text-sm font-bold text-brand-900 hover:bg-amber-300">Write a post</button></div></div></div>;
}

function OverviewCard({ label, value }: { label: string; value: number }) { return <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p><p className="mt-3 text-4xl font-black text-brand-900">{value}</p></div>; }
function SettingsCard({ title, description, children }: { title: string; description: string; children: React.ReactNode }) { return <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-extrabold text-brand-900">{title}</h2><p className="mt-2 text-sm text-slate-600">{description}</p><div className="mt-7">{children}</div></div>; }
function AdminField({ label, value, onChange, placeholder, type = 'text' }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; type?: string }) { return <label className="block text-sm font-bold text-brand-900">{label}<input type={type} value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 font-normal outline-none focus:border-brand-700 focus:ring-4 focus:ring-amber-100" /></label>; }

function UrlSubmissionSettings({ submissions, submitUrl }: { submissions: UrlSubmission[]; submitUrl: (url: string) => Promise<void> }) {
  const [url, setUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');
    try {
      await submitUrl(url.trim());
      setUrl('');
      setSuccess('URL submitted to Bing successfully.');
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to submit this URL.');
    } finally {
      setSubmitting(false);
    }
  };

  return <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]"><SettingsCard title="Submit a URL" description="Send a new or updated page to Bing through IndexNow. Only URLs on this website are accepted."><form onSubmit={handleSubmit} className="space-y-5"><AdminField label="Page URL" value={url} onChange={setUrl} type="url" placeholder="https://yourdomain.com/page" /><button type="submit" disabled={submitting || !url.trim()} className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-brand-900 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"><Link2 className="h-4 w-4" />{submitting ? 'Submitting...' : 'Submit URL'}</button>{success && <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{success}</p>}{error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}</form></SettingsCard><SettingsCard title="Recent submissions" description="The last 20 successful submissions saved in this browser.">{submissions.length ? <div className="space-y-3">{submissions.map((submission) => <div key={`${submission.url}-${submission.submittedAt}`} className="rounded-lg border border-slate-200 bg-slate-50 p-3"><p className="break-all text-sm font-semibold text-brand-900">{submission.url}</p><p className="mt-1 text-xs text-slate-500">{new Date(submission.submittedAt).toLocaleString()}</p></div>)}</div> : <p className="text-sm text-slate-500">No URLs submitted from this browser yet.</p>}</SettingsCard></div>;
}

function ImageSettings({ settings, updateImage, handleImageFile }: { settings: AdminSettings; updateImage: (field: keyof AdminSettings['images'], value: string) => void; handleImageFile: (field: keyof AdminSettings['images'], event: ChangeEvent<HTMLInputElement>) => void }) {
  const items: Array<[keyof AdminSettings['images'], string, string]> = [['hero', 'Homepage hero', 'Main homepage image'], ['about', 'About page image', 'Company overview image'], ['services', 'Services feature image', 'Services hero/feature image'], ['footer', 'Footer background', 'Shared footer cityscape']];
  return <SettingsCard title="Site images" description="Paste an image URL or choose a local image. Changes are saved in this browser when you press Save settings."><div className="grid gap-6 md:grid-cols-2">{items.map(([field, label, description]) => <div key={field} className="overflow-hidden rounded-lg border border-slate-200"><div className="relative h-36 bg-slate-100">{settings.images[field] && <img src={settings.images[field]} alt="" className="h-full w-full object-cover" />}</div><div className="space-y-3 p-4"><div><h3 className="font-bold text-brand-900">{label}</h3><p className="text-xs text-slate-500">{description}</p></div><input value={settings.images[field]} onChange={(event) => updateImage(field, event.target.value)} className="h-10 w-full rounded border border-slate-200 px-3 text-xs" placeholder="https://... or /image.jpg" /><label className="inline-flex cursor-pointer items-center gap-2 text-xs font-bold text-brand-700"><FileImage className="h-4 w-4" />Choose image<input type="file" accept="image/*" onChange={(event) => handleImageFile(field, event)} className="sr-only" /></label></div></div>)}</div></SettingsCard>;
}

function PostsSettings({ posts, postForm, setPostForm, createPost, deletePost }: { posts: Post[]; postForm: { title: string; category: Post['category']; excerpt: string; featuredImage: string }; setPostForm: (form: { title: string; category: Post['category']; excerpt: string; featuredImage: string }) => void; createPost: (event: FormEvent<HTMLFormElement>) => void; deletePost: (id: string) => void }) {
  const handleImage = (event: ChangeEvent<HTMLInputElement>) => { const file = event.target.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => setPostForm({ ...postForm, featuredImage: String(reader.result) }); reader.readAsDataURL(file); };
  return <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]"><SettingsCard title="New post or blog" description="Create a draft entry for your next company update or article."><form onSubmit={createPost} className="space-y-5"><AdminField label="Title" value={postForm.title} onChange={(value) => setPostForm({ ...postForm, title: value })} placeholder="Post title" /><label className="block text-sm font-bold text-brand-900">Type<select value={postForm.category} onChange={(event) => setPostForm({ ...postForm, category: event.target.value as Post['category'] })} className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 font-normal"><option>Blog</option><option>News</option></select></label><label className="block text-sm font-bold text-brand-900">Excerpt<textarea value={postForm.excerpt} onChange={(event) => setPostForm({ ...postForm, excerpt: event.target.value })} rows={5} placeholder="Short summary for cards and previews" className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-normal" /></label><label className="block text-sm font-bold text-brand-900">Featured image URL<input value={postForm.featuredImage.startsWith('data:') ? '' : postForm.featuredImage} onChange={(event) => setPostForm({ ...postForm, featuredImage: event.target.value })} className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 font-normal" placeholder="https://... or /image.jpg" /></label><label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-slate-100 px-4 py-3 text-sm font-bold text-brand-900 hover:bg-slate-200">Choose image<input type="file" accept="image/*" onChange={handleImage} className="sr-only" /></label>{postForm.featuredImage && <img src={postForm.featuredImage} alt="Post preview" className="h-40 w-full rounded-lg object-cover" />}<button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-brand-900 hover:bg-amber-300"><Sparkles className="h-4 w-4" />Save draft</button></form></SettingsCard><SettingsCard title="Content library" description="Your saved posts and articles appear here."><div className="space-y-3">{posts.map((post) => <div key={post.id} className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 p-4"><div className="flex gap-3">{post.featuredImage && <img src={post.featuredImage} alt="" className="h-16 w-20 rounded object-cover" />}<div><div className="flex flex-wrap items-center gap-2"><h3 className="font-bold text-brand-900">{post.title}</h3><span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase text-slate-600">{post.category}</span></div><p className="mt-1 text-xs text-slate-500">{post.date} · {post.status}</p><p className="mt-2 text-sm text-slate-600">{post.excerpt}</p></div></div><button type="button" onClick={() => deletePost(post.id)} aria-label={`Delete ${post.title}`} className="rounded p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"><Trash2 className="h-4 w-4" /></button></div>)}</div></SettingsCard></div>;
}

function ProjectsSettings({ projects, projectForm, setProjectForm, saveProject, deleteProject }: { projects: AdminProject[]; projectForm: Omit<AdminProject, 'id'>; setProjectForm: (form: Omit<AdminProject, 'id'>) => void; saveProject: (event: FormEvent<HTMLFormElement>) => void; deleteProject: (id: string) => void }) {
  const update = (field: keyof Omit<AdminProject, 'id'>, value: string) => setProjectForm({ ...projectForm, [field]: value });
  const chooseProjectImage = (event: ChangeEvent<HTMLInputElement>) => { const file = event.target.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => update('image', String(reader.result)); reader.readAsDataURL(file); };
  const categories = ['Construction', 'Real Estate', 'Logistics', 'Technology', 'Trade & Commerce', 'Others'];
  return <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]"><SettingsCard title="Add project" description="Create a project that will appear on the public Projects page."><form onSubmit={saveProject} className="space-y-4"><AdminField label="Project title" value={projectForm.title} onChange={(value) => update('title', value)} placeholder="Project name" /><div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm font-bold text-brand-900">Category<select value={projectForm.category} onChange={(event) => update('category', event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 font-normal">{categories.map((category) => <option key={category}>{category}</option>)}</select></label><label className="block text-sm font-bold text-brand-900">Status<select value={projectForm.status} onChange={(event) => update('status', event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 font-normal"><option>Ongoing</option><option>Completed</option></select></label></div><AdminField label="Location" value={projectForm.location} onChange={(value) => update('location', value)} placeholder="Accra, Ghana" /><label className="block text-sm font-bold text-brand-900">Description<textarea value={projectForm.description} onChange={(event) => update('description', event.target.value)} rows={4} className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-normal" placeholder="Describe the project" /></label><label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-slate-100 px-4 py-3 text-sm font-bold text-brand-900 hover:bg-slate-200">Choose project image<input type="file" accept="image/*" onChange={chooseProjectImage} className="sr-only" /></label>{projectForm.image && <img src={projectForm.image} alt="Project preview" className="h-36 w-full rounded-lg object-cover" />}<button type="submit" className="rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-brand-900 hover:bg-amber-300">Add project</button></form></SettingsCard><SettingsCard title="Project library" description="Delete entries you no longer want to show publicly."><div className="space-y-3">{projects.map((project) => <div key={project.id} className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 p-4"><div className="flex gap-3">{project.image && <img src={project.image} alt="" className="h-16 w-20 rounded object-cover" />}<div><h3 className="font-bold text-brand-900">{project.title}</h3><p className="mt-1 text-xs text-slate-500">{project.category} · {project.status} · {project.location}</p><p className="mt-2 text-sm text-slate-600">{project.description}</p></div></div><button type="button" onClick={() => deleteProject(project.id)} aria-label={`Delete ${project.title}`} className="rounded p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"><Trash2 className="h-4 w-4" /></button></div>)}</div></SettingsCard></div>;
}
