import { AppLink } from '../elements/app-link';
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <nav>
        <ul className='nav-ul'>
          <li>
            <AppLink className='link' href='/'>
              Impressum
            </AppLink>
          </li>
          <li>
            <AppLink className='link' href='/'>
              Politika privatnosti
            </AppLink>
          </li>
          <li>
            <AppLink className='link' href='/'>
              Cookie
            </AppLink>
          </li>
          <li>
            <AppLink className='link' href='/'>
              Disclaimer
            </AppLink>
          </li>
        </ul>
      </nav>
      <p className='footer__copy'>
        &copy; {currentYear} OraFlow. All rights reserved.
      </p>
    </footer>
  );
}
