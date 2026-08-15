import type { Metadata } from "next";
import { locales } from "@oraflow/i18n";
import { Header, Footer } from "@oraflow/ui";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "OraFlow",
  description: "Oral health, function, growth — educational dental blog",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;

  return (
    <div data-lang={lang}>
      <Header lang={lang} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
