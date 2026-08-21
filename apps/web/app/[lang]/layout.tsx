import type { Metadata } from "next";
import { Header } from "@/components/shell/header";
import { Footer } from "@/components/shell/footer";
export const metadata: Metadata = {
  title: "OraFlow",
  description: "Oral health, function, growth — educational dental blog",
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body>
        <div className="wrap">
          <Header lang={lang} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
