import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/src/data/company';

export const metadata: Metadata = {
  title: 'Privacy Policy | First Dest Company Limited',
  description:
    'Learn how First Dest Company Limited collects, uses, protects, and manages personal information when you use our website or contact us.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-amber-300">Legal</p>
          <h1 className="text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft md:p-10">
            <p className="text-sm font-semibold text-slate-500">Last updated: September 2026</p>
            <p className="mt-5 leading-8 text-slate-600">
              First Dest Company Limited respects your privacy. This policy explains what information we collect
              through this website, why we use it, and the choices available to you. It applies to visitors to this
              website and people who contact us through our online contact form.
            </p>
          </div>

          <PolicySection title="Information we collect">
            <p>
              When you send an enquiry, we may collect your full name, email address, phone number, company or
              organization, subject, and message. We may also receive technical information such as your IP address,
              browser type, and request time through normal hosting and security logs.
            </p>
            <p>
              The private admin area may store settings, draft content, project information, access-code data, and
              image uploads in the browser&apos;s local storage. This information is stored on that browser and is not
              automatically shared with our public website or other browsers.
            </p>
          </PolicySection>

          <PolicySection title="How we use information">
            <p>We use information to:</p>
            <ul>
              <li>respond to enquiries and requests for information;</li>
              <li>understand and follow up on potential business relationships;</li>
              <li>operate, secure, and improve this website;</li>
              <li>maintain website administration and content; and</li>
              <li>meet applicable legal, regulatory, or contractual obligations.</li>
            </ul>
            <p>We do not sell personal information or use contact-form details for unrelated marketing without an appropriate legal basis or your permission.</p>
          </PolicySection>

          <PolicySection title="Contact form and service providers">
            <p>
              Contact-form messages are sent through our email service provider to{' '}
              <a href={`mailto:${company.email}`} className="font-semibold text-brand-700 hover:text-brand-900">{company.email}</a> so that we can review and respond to them. Service providers may process information only as needed to provide their services to us.
            </p>
            <p>
              Website hosting providers may process technical request data to deliver and protect the site. We do not
              currently use advertising cookies or an analytics platform on this website.
            </p>
          </PolicySection>

          <PolicySection title="Browser storage and cookies">
            <p>
              The public website does not intentionally use tracking cookies. The admin area uses browser local storage
              for access and editing preferences. Clearing your browser storage will remove those locally saved admin
              settings and drafts.
            </p>
            <p>
              Third-party content, such as externally hosted images, may make a request to that provider when loaded.
              Those providers may process technical information under their own privacy policies.
            </p>
          </PolicySection>

          <PolicySection title="Retention and security">
            <p>
              We keep enquiry information only for as long as reasonably necessary to handle the request, maintain a
              business relationship, resolve disputes, and meet legal or accounting requirements. Local admin data
              remains in the browser until it is deleted or the browser storage is cleared.
            </p>
            <p>
              We use reasonable administrative and technical safeguards, but no internet transmission or storage system
              can be guaranteed to be completely secure. Do not send passwords, payment-card details, or other highly
              sensitive information through the contact form.
            </p>
          </PolicySection>

          <PolicySection title="Your choices and rights">
            <p>
              Depending on where you live, you may have rights to request access to, correction of, deletion of, or
              restrictions on the use of your personal information. You may also object to certain processing or ask us
              to provide information in a portable format where applicable.
            </p>
            <p>
              To make a privacy request or ask a question about this policy, contact us using the details below. We may
              need to verify your identity before completing a request.
            </p>
          </PolicySection>

          <PolicySection title="Changes to this policy">
            <p>
              We may update this policy when our website, services, or legal obligations change. The revised version
              will be posted on this page with a new update date.
            </p>
          </PolicySection>

          <div className="rounded-[28px] bg-brand-900 p-8 text-white shadow-soft md:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">Privacy enquiries</p>
            <h2 className="mt-3 text-2xl font-extrabold">Talk to First Dest</h2>
            <p className="mt-3 leading-7 text-slate-200">{company.address}</p>
            <p className="mt-1 leading-7 text-slate-200">{company.phone} · {company.email}</p>
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
