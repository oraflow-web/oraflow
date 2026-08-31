import Link from 'next/link';
import { ImageWithFallback } from '../elements/image-with-fallback';
import { AppLink } from '../elements/app-link';
import { LanguageSwitcher } from './language-switcher';
import { getCategories } from '@/lib/sanity/queries';
import type { Category } from '@/lib/sanity/types';

type HeaderProps = {
  lang: string;
};

export async function Header({ lang }: HeaderProps) {
  const categories: Category[] = await getCategories(lang);

  return (
    <header className='header'>
      <Link href={`/${lang}`} className='header__logo'>
        <ImageWithFallback
          src='/logo.jpeg'
          alt='OraFlow'
          width={52}
          height={52}
          unoptimized
        />
      </Link>
      <nav className='header__nav'>
        <ul className='nav-ul'>
          {categories.map((category) => (
            <li key={category._id}>
              <AppLink href={`/${category.slug}`} lang={lang}>
                {category.title}
              </AppLink>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageSwitcher lang={lang} path='' />
    </header>
  );
}
