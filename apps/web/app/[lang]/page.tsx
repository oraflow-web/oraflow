type Props = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: Props) {
  const { lang } = await params;

  return (
    <main>
      <h1>OraFlow</h1>
      <p>Dobrodošli — lang: {lang}</p>
    </main>
  );
}
