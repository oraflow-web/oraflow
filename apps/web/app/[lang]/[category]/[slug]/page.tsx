type Props = {
  params: Promise<{ lang: string; category: string; slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { lang, category, slug } = await params;

  return (
    <main>
      <article>
        <h1>Blog: {slug}</h1>
        <p>
          Kategorija: {category} — lang: {lang}
        </p>
      </article>
    </main>
  );
}
