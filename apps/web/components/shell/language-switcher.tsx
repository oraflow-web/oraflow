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
      <summary className='btn btn--secondary'>
        {langLabels[lang as keyof typeof langLabels]}
      </summary>
      <ul className='language-switcher__list'>
        {langs.map((code) => {
          const linkClass =
            code === lang
              ? 'language-switcher__link active'
              : 'language-switcher__link';
          const ariaCurrent = code === lang ? 'page' : undefined;
          return (
            <li key={code} className='language-switcher__item'>
              <AppLink
                className={linkClass}
                href={`/${code}${path}`}
                aria-current={ariaCurrent}
              >
                {langLabels[code]}
              </AppLink>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
