import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | First Dest Company Limited',
  description:
    'Read the terms that apply when you access and use the First Dest Company Limited website and contact our team.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-amber-300">Legal</p>
          <h1 className="text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">Terms of Service</h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft md:p-10">
            <p className="text-sm font-semibold text-slate-500">Last updated: September 2026</p>
            <p className="mt-5 leading-8 text-slate-600">
              These Terms of Service govern your access to and use of the First Dest Company Limited website. By using
              the website, you agree to follow these terms. If you do not agree, please do not use the website.
            </p>
          </div>

          <PolicySection title="About the website">
            <p>
              The website provides general information about First Dest Company Limited, its business areas, projects,
              and ways to contact the company. Website content is provided for general information and does not by
              itself constitute financial, legal, construction, investment, or other professional advice.
            </p>
          </PolicySection>

          <PolicySection title="Acceptable use">
            <p>You agree to use the website lawfully and responsibly. You must not:</p>
            <ul>
              <li>use the website for fraud, unlawful activity, or unauthorised commercial solicitation;</li>
              <li>submit information that is false, misleading, abusive, defamatory, or harmful;</li>
              <li>attempt to gain unauthorised access to the website, admin tools, systems, or data;</li>
              <li>introduce malware, malicious code, or activity that disrupts the website; or</li>
              <li>copy, scrape, reproduce, or exploit website content without permission.</li>
            </ul>
          </PolicySection>

          <PolicySection title="Enquiries and business engagements">
            <p>
              Sending an enquiry through the website does not create a client, agency, partnership, employment, or other
              contractual relationship. It also does not guarantee that First Dest will accept a project or provide a
              particular service.
            </p>
            <p>
              Any services, fees, deliverables, timelines, responsibilities, and other commercial terms will apply only
              when set out in a separate written agreement accepted by the relevant parties.
            </p>
          </PolicySection>

          <PolicySection title="Website content and intellectual property">
            <p>
              Unless otherwise stated, the website design, text, logos, graphics, images, and other materials belong to
              First Dest Company Limited or are used with permission. You may view and share ordinary links to the
              website for lawful informational purposes, but you may not reproduce, modify, distribute, or commercially
              exploit our materials without prior written permission.
            </p>
            <p>
              You retain responsibility for information you submit through the website and confirm that you have the
              right to provide it to us.
            </p>
          </PolicySection>

          <PolicySection title="Third-party services and links">
            <p>
              The website may contain links to, or use content and services provided by, third parties. These services
              are outside our control and may have separate terms and privacy policies. A link or embedded resource
              does not mean that First Dest endorses the third party or guarantees its availability, security, or
              accuracy.
            </p>
          </PolicySection>

          <PolicySection title="Accuracy and availability">
            <p>
              We aim to keep website information accurate and current, but we do not promise that every description,
              image, price, availability statement, or other content is complete, current, or error-free. We may change,
              suspend, or remove website content or functionality at any time without notice.
            </p>
          </PolicySection>

          <PolicySection title="Disclaimers and limitation of liability">
            <p>
              To the extent permitted by applicable law, the website is provided on an “as available” basis without
              warranties that it will always be uninterrupted, secure, or free from errors. You use the website at your
              own risk and should independently verify information before relying on it for a business decision.
            </p>
            <p>
              To the extent permitted by law, First Dest will not be responsible for indirect, incidental, special, or
              consequential loss arising from your use of, or inability to use, the website. Nothing in these terms
              excludes liability that cannot legally be excluded or limited.
            </p>
          </PolicySection>

          <PolicySection title="Suspension and changes">
            <p>
              We may suspend or restrict access where necessary to protect the website, our users, or our systems, or
              where we reasonably believe these terms have been breached. We may update these terms when our website,
              services, or legal obligations change. The revised version will be posted on this page with a new update
              date.
            </p>
          </PolicySection>

          <PolicySection title="Governing law">
            <p>
              These terms are intended to be interpreted under the laws of the Republic of Ghana, unless applicable law
              requires otherwise. Disputes should first be raised with us in good faith so the parties can try to resolve
              them informally before pursuing other available remedies.
            </p>
          </PolicySection>

          <div className="rounded-[28px] bg-brand-900 p-8 text-white shadow-soft md:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">Questions about these terms?</p>
            <h2 className="mt-3 text-2xl font-extrabold">Contact First Dest</h2>
            <p className="mt-3 leading-7 text-slate-200">For questions about the website or a potential engagement, please contact our team.</p>
            <Link href="/contact" className="mt-6 inline-flex items-center rounded-full bg-amber-400 px-6 py-3.5 font-bold text-brand-900 transition hover:bg-amber-300">
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft md:p-10">
      <h2 className="text-2xl font-extrabold text-brand-900">{title}</h2>
      <div className="mt-5 space-y-4 leading-8 text-slate-600 [&_li]:ml-5 [&_li]:list-disc">{children}</div>
    </section>
  );
}
