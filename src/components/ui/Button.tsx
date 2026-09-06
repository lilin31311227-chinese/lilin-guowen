import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  'aria-label'?: string;
  'aria-disabled'?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
  'aria-disabled': ariaDisabled,
}: ButtonProps) {
  const baseStyles = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const combinedStyles = `${baseStyles} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedStyles}
        aria-label={ariaLabel}
        aria-disabled={ariaDisabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={ariaDisabled}
    >
      {children}
    </button>
  );
}
