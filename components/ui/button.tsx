import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/src/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-3 font-bold text-white transition hover:bg-brand-900',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
