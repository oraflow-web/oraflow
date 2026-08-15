import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  lang: string;
};

export function Header({ lang }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__container">
        <Link href={`/${lang}`} className="header__logo">
          <Image
            src="/logo.jpeg"
            alt="OraFlow"
            width={48}
            height={48}
            unoptimized
          />
        </Link>
        <nav className="header__nav">{/* Navigation items go here */}</nav>
      </div>
    </header>
  );
}
