import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <Image
          src="/logo-long.jpeg"
          alt="OraFlow"
          width={180}
          height={48}
          unoptimized
          className="footer__logo"
        />
        <p className="footer__copy">
          &copy; {currentYear} OraFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
