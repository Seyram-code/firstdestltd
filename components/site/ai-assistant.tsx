'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Bot, Check, ChevronDown, Mail, MessageCircle, Send, UserRound, X } from 'lucide-react';

type ChatMessage = { id: string; role: 'assistant' | 'user'; content: string };
type LeadForm = { fullName: string; email: string; phone: string; company: string; message: string };

const initialMessage: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content: 'Hello. I am the First Dest Assistant. I can help you explore our services, recommend a starting point, or connect you with the team.',
};

const initialLead: LeadForm = { fullName: '', email: '', phone: '', company: '', message: '' };

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [lead, setLead] = useState<LeadForm>(initialLead);
  const [leadBusy, setLeadBusy] = useState(false);
  const [leadStatus, setLeadStatus] = useState('');
  const [error, setError] = useState('');

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = input.trim();
    if (!content || busy) return;

    const userMessage: ChatMessage = { id: crypto.randomUUID(), role: 'user', content };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput('');
    setBusy(true);
    setError('');

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.map(({ role, content: messageContent }) => ({ role, content: messageContent })) }),
      });
      const result = (await response.json()) as { message?: string; error?: string };
      if (!response.ok || !result.message) throw new Error(result.error ?? 'The assistant could not respond.');
      setMessages((current) => [...current, { id: crypto.randomUUID(), role: 'assistant', content: result.message ?? '' }]);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'The assistant could not respond.');
    } finally {
      setBusy(false);
    }
  };

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLeadBusy(true);
    setLeadStatus('');
    setError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, subject: 'AI assistant enquiry', message: lead.message.trim() }),
      });
      const result = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) throw new Error(result.error ?? 'Unable to send your enquiry.');
      setLead(initialLead);
      setLeadStatus(result.message ?? 'Your enquiry has been sent.');
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Unable to send your enquiry.');
    } finally {
      setLeadBusy(false);
    }
  };

  return <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
    {open && <section aria-label="First Dest AI Assistant" className="flex h-[min(680px,calc(100vh-120px))] w-[min(400px,calc(100vw-32px))] flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl">
      <header className="flex items-center justify-between bg-brand-900 px-5 py-4 text-white">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-brand-900"><Bot className="h-5 w-5" /></span><div><p className="text-sm font-extrabold">First Dest Assistant</p><p className="mt-0.5 text-xs text-slate-300">Services, enquiries, and next steps</p></div></div>
        <button type="button" aria-label="Close assistant" onClick={() => setOpen(false)} className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"><X className="h-5 w-5" /></button>
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4" aria-live="polite">
        {messages.map((message) => <div key={message.id} className={`flex gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}><span className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${message.role === 'user' ? 'order-2 bg-brand-700 text-white' : 'bg-amber-100 text-amber-700'}`}>{message.role === 'user' ? <UserRound className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}</span><p className={`max-w-[82%] whitespace-pre-wrap rounded-2xl px-3.5 py-3 text-sm leading-6 ${message.role === 'user' ? 'bg-brand-700 text-white' : 'border border-slate-200 bg-white text-slate-700'}`}>{message.content}</p></div>)}
        {busy && <div className="flex items-center gap-2 text-xs text-slate-500"><Bot className="h-4 w-4 text-amber-600" />Thinking...</div>}
        {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-xs leading-5 text-red-700">{error}</p>}
      </div>

      {showLeadForm ? <form onSubmit={submitLead} className="space-y-3 border-t border-slate-200 bg-white p-4"><div className="flex items-center justify-between"><p className="text-sm font-extrabold text-brand-900">Connect with the team</p><button type="button" onClick={() => setShowLeadForm(false)} className="text-xs font-bold text-slate-500 hover:text-brand-900">Back to chat</button></div><div className="grid gap-3 sm:grid-cols-2"><AssistantField label="Name" value={lead.fullName} onChange={(value) => setLead({ ...lead, fullName: value })} required /><AssistantField label="Email" type="email" value={lead.email} onChange={(value) => setLead({ ...lead, email: value })} required /><AssistantField label="Phone" value={lead.phone} onChange={(value) => setLead({ ...lead, phone: value })} required /><AssistantField label="Company" value={lead.company} onChange={(value) => setLead({ ...lead, company: value })} required /></div><label className="block text-xs font-bold text-brand-900">How can we help?<textarea required minLength={20} rows={3} value={lead.message} onChange={(event) => setLead({ ...lead, message: event.target.value })} className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-normal outline-none focus:border-brand-700 focus:ring-4 focus:ring-amber-100" /></label><button type="submit" disabled={leadBusy} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-3 text-sm font-bold text-brand-900 transition hover:bg-amber-300 disabled:opacity-60">{leadBusy ? 'Sending...' : 'Send enquiry'}<Send className="h-4 w-4" /></button>{leadStatus && <p className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-700"><Check className="h-4 w-4" />{leadStatus}</p>}</form> : <div className="border-t border-slate-200 bg-white p-3"><div className="mb-2 flex gap-2"><button type="button" onClick={() => setInput('Which service is right for my business?')} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-brand-300 hover:text-brand-700">Recommend a service</button><button type="button" onClick={() => setShowLeadForm(true)} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-brand-300 hover:text-brand-700">Talk to the team</button></div><form onSubmit={sendMessage} className="flex items-center gap-2"><input aria-label="Message First Dest Assistant" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about First Dest..." className="h-11 min-w-0 flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:border-brand-700 focus:ring-4 focus:ring-amber-100" /><button type="submit" aria-label="Send message" disabled={busy || !input.trim()} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-700 text-white transition hover:bg-brand-900 disabled:opacity-50"><Send className="h-4 w-4" /></button></form></div>}
    </section>}
    <button type="button" aria-expanded={open} aria-label={open ? 'Close First Dest Assistant' : 'Open First Dest Assistant'} onClick={() => setOpen((current) => !current)} className="group flex items-center gap-3 rounded-full bg-amber-400 px-4 py-3 font-bold text-brand-900 shadow-xl transition hover:bg-amber-300"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-900 text-amber-300"><MessageCircle className="h-5 w-5" /></span><span className="hidden sm:inline">{open ? 'Close assistant' : 'Ask First Dest'}</span>{open ? <ChevronDown className="h-4 w-4" /> : <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />}</button>
  </div>;
}

function AssistantField({ label, value, onChange, type = 'text', required = false }: { label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean }) {
  return <label className="block text-xs font-bold text-brand-900">{label}<input type={type} required={required} value={value} onChange={(event) => onChange(event.target.value)} className="mt-1.5 h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-normal outline-none focus:border-brand-700 focus:ring-4 focus:ring-amber-100" /></label>;
}
