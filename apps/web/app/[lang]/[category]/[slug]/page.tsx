import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { ImageWithFallback } from '@/components/elements/image-with-fallback';
import { getPostBySlug } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';
import type { Post } from '@/lib/sanity/types';

type Props = {
  params: Promise<{ lang: string; category: string; slug: string }>;
};

export default async function PostPage({ params }: Props) {
  const { lang, slug } = await params;

  const post: Post | null = await getPostBySlug(slug, lang);

  if (!post) {
    notFound();
  }

  return (
    <main className='main'>
      <h1>{post.title}</h1>

      {/* {post.images?.length > 0 && (
        <div className='post__gallery'>
          {post.images.map((image, index) => (
            <ImageWithFallback
              key={image._key ?? index}
              src={urlFor(image).width(800).url()}
              alt={image.alt ?? post.title}
              width={800}
              height={600}
              priority={index === 0}
            />
          ))}
        </div>
      )} */}

      {post.body && (
        <div className='post__body'>
          <PortableText value={post.body} />
        </div>
      )}
    </main>
  );
}
