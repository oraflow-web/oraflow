import type { Metadata } from "next";
import { locales } from "@oraflow/i18n";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "OraFlow",
  description: "Stomatološki blog — zdravlje zuba za celu porodicu",
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

  return <div data-lang={lang}>{children}</div>;
}
