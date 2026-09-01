import { langs, langLabels } from '../../i18n/config';
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
      <summary>{langLabels[lang as keyof typeof langLabels]}</summary>
      <ul className='language-switcher__list'>
        {langs.map((code) => (
          <li key={code} className='language-switcher__item'>
            <AppLink
              href={`/${code}${path}`}
              aria-current={code === lang ? 'page' : undefined}
            >
              {langLabels[code]}
            </AppLink>
          </li>
        ))}
      </ul>
    </details>
  );
}
