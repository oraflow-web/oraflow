'use client';
import Link from 'next/link';
import { ImageWithFallback } from '../elements/image-with-fallback';
import { Select } from '../elements/select';
import { AppLink } from '../elements/app-link';

type HeaderProps = {
  lang: string;
};

export function Header({ lang }: HeaderProps) {
  const languages = [
    {
      text: 'srpski',
      value: 'sr',
    },
    {
      text: 'nemacki',
      value: 'de',
    },
  ];
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
            <AppLink href="/" children="ovde idu kategorije 2" />
          </li>
        </ul>
      </nav>
      <Select
        selectID="language"
        label="Odaberite jezik"
        options={languages}
        onChange={(e) => console.log(e)}
      />
    </header>
  );
}
