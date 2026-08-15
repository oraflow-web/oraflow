type Props = {
  params: Promise<{ lang: string; category: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { lang, category } = await params;

  return (
    <main>
      <h1>Kategorija: {category}</h1>
      <p>Blog lista — lang: {lang}</p>
    </main>
  );
}
