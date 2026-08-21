import { ImageWithFallback } from "@/components/elements/image-with-fallback";
type Props = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: Props) {
  const { lang } = await params;

  return (
    <main className="main">
      <h1>WORK IN PROGRESS!</h1>
      <ImageWithFallback
        src="/logo-long.jpeg"
        alt="OraFlow"
        width={360}
        height={120}
        unoptimized
        className="footer__logo"
      />
      <h2>OraFlow v2</h2>
      <h2>Dobrodošli - lang: {lang}</h2>
    </main>
  );
}
