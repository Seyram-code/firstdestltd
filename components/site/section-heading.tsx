type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  centered = false,
  dark = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <p
        className={`mb-4 text-sm font-extrabold uppercase tracking-[0.18em] ${
          dark ? 'text-amber-300' : 'text-amber-500'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-4xl font-extrabold tracking-[-0.05em] md:text-5xl ${
          dark ? 'text-white' : 'text-brand-900'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
