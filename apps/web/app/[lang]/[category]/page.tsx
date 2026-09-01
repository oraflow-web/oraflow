import { AppLink } from '@/components/elements/app-link';
import { ImageWithFallback } from '@/components/elements/image-with-fallback';
import { getCategoryBySlug, getPostsByCategory } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';
import type { Category, Post } from '@/lib/sanity/types';

type Props = {
  params: Promise<{ lang: string; category: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { lang, category } = await params;

  const [categoryDoc, posts]: [Category | null, Post[]] = await Promise.all([
    getCategoryBySlug(category, lang),
    getPostsByCategory(category, lang),
  ]);

  return (
    <main className='main'>
      <h1>{categoryDoc?.title ?? category}</h1>
      {categoryDoc?.description && <p>{categoryDoc.description}</p>}

      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <AppLink href={`/${lang}/${category}/${post.slug}`}>
              {post.images?.[0] && (
                <ImageWithFallback
                  src={urlFor(post.images[0]).width(400).height(300).url()}
                  alt={post.images[0].alt ?? post.title}
                  width={400}
                  height={300}
                />
              )}
              <h2>{post.title}</h2>
            </AppLink>
          </li>
        ))}
      </ul>
    </main>
  );
}
