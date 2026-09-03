import { ImageWithFallback } from '@/components/elements/image-with-fallback';
import { AppLink } from '@/components/elements/app-link';
import type { Post } from '@/lib/sanity/types';
import { getLatestPosts } from '@/lib/sanity/queries';
type Props = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const posts: Post[] | null = await getLatestPosts(lang);

  return (
    <main className='main'>
      {posts && posts.length > 0 && (
        <section className='posts'>
          {posts.map((post) => (
            <article key={post._id} className='posts__article'>
              <ImageWithFallback
                src={post.images[0]}
                alt={post.images[0].alt ?? 'post image'}
                width={500}
                height={380}
                isSanityImage={true}
              />
              <h2>{post.title}</h2>
              <AppLink
                className='link'
                href={`/${post.category.slug}/${post.slug}`}
              >
                Procitaj vise
              </AppLink>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
