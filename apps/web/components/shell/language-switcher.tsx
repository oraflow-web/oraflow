import { locales, localeLabels } from '../../i18n/config';
import { AppLink } from '../elements/app-link';

export function LanguageSwitcher({
  lang,
  path,
}: {
  lang: string;
  path: string;
}) {
  return (
    <details className='language-switcher'>
      <summary>{localeLabels[lang as keyof typeof localeLabels]}</summary>
      <ul className='language-switcher__list'>
        {locales.map((code) => (
          <li key={code} className='language-switcher__item'>
            <AppLink
              href={`/${code}${path}`}
              aria-current={code === lang ? 'page' : undefined}
            >
              {localeLabels[code]}
            </AppLink>
          </li>
        ))}
      </ul>
    </details>
  );
}
