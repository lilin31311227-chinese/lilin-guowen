import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'cream' | 'white' | 'navy';
}

export default function Section({
  children,
  className = '',
  id,
  background = 'cream'
}: SectionProps) {
  const bgStyles = {
    cream: 'bg-[var(--cream)]',
    white: 'bg-white',
    navy: 'bg-[var(--navy)] text-[var(--cream)]',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`section-title ${light ? 'text-[var(--cream)]' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${light ? 'text-[var(--cream)]/80' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
