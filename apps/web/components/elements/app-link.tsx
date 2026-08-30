import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

interface AppLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string;
}

export function AppLink({ href, children, className, ...props }: AppLinkProps) {
  const isNewTab = href.startsWith('http://') || href.startsWith('https://');
  const isExternal =
    isNewTab || href.startsWith('mailto:') || href.startsWith('tel:');
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        {...(isNewTab && { target: '_blank', rel: 'noopener noreferrer' })}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={'link'} {...props}>
      {children}
    </Link>
  );
}

AppLink.displayName = 'AppLink';
