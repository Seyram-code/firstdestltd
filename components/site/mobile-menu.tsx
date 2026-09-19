type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const menuItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Industries', '/industries'],
  ['Projects', '/projects'],
  ['Why Us', '/about'],
  ['Contact', '/contact'],
];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="mx-auto max-w-7xl space-y-1 border-t border-slate-200 bg-white px-4 py-4">
        {menuItems.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={onClose}
            className="block rounded-xl px-3 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-brand-700"
          >
            {label}
          </a>
        ))}

        <a
          href="/contact"
          onClick={onClose}
          className="mobile-cta mt-3 inline-flex w-full items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-brand-900"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
