export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copy">
        &copy; {currentYear} OraFlow. All rights reserved.
      </p>
    </footer>
  );
}
