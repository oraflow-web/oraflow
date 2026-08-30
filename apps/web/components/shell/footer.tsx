export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <nav>
        <ul className="nav-ul">
          <li>
            <a href="/">Impressum</a>
          </li>
          <li>
            <a href="/">Politika privatnosti</a>
          </li>
          <li>
            <a href="/">Cookie</a>
          </li>
          <li>
            <a href="/">Disclaimer</a>
          </li>
        </ul>
      </nav>
      <p className="footer__copy">
        &copy; {currentYear} OraFlow. All rights reserved.
      </p>
    </footer>
  );
}
