import Link from 'next/link';
import { ImageWithFallback } from '../elements/image-with-fallback';
import { AppLink } from '../elements/app-link';
import { LanguageSwitcher } from './language-switcher';

type HeaderProps = {
  lang: string;
};

export function Header({ lang }: HeaderProps) {
  return (
    <header className="header">
      <Link href={`/${lang}`} className="header__logo">
        <ImageWithFallback
          src="/logo.jpeg"
          alt="OraFlow"
          width={52}
          height={52}
          unoptimized
        />
      </Link>
      <nav className="header__nav">
        <ul className="nav-ul">
          <li>
            <AppLink href="/">ovde idu kategorije</AppLink>
          </li>
        </ul>
      </nav>
      <LanguageSwitcher lang="sr" path="" />
    </header>
  );
}
