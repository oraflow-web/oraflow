'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { urlFor } from '@/lib/sanity/image';

type ImageWithFallbackProps = {
  /**
   * Either a plain image URL, or a raw Sanity image source when
   * `isSanityImage` is set. When a Sanity source is passed the URL is
   * built internally via `urlFor`, sized to `width`/`height`.
   */
  src: string | Record<string, unknown> | null | undefined;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fallbackText?: string;
  unoptimized?: boolean;
  /** Treat `src` as a raw Sanity image source and build the URL with `urlFor`. */
  isSanityImage?: boolean;
};

/**
 * Image component with a loading state and fallback for broken/missing images.
 *
 * Note: the parent element should have `position: relative` and defined dimensions
 * for the shimmer overlay to display correctly.
 */
export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className,
  fallbackText,
  unoptimized = false,
  isSanityImage = false,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const resolvedSrc =
    isSanityImage && src
      ? urlFor(src).width(width).height(height).url()
      : typeof src === 'string'
        ? src
        : '';

  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
  }, [resolvedSrc]);

  if (hasError || !resolvedSrc) {
    return (
      <span className='image-with-fallback__placeholder'>
        {fallbackText ?? alt}
      </span>
    );
  }

  return (
    <>
      {isLoading && (
        <span
          className='image-with-fallback__loader'
          aria-hidden='true'
          style={{ width, height }}
        />
      )}
      <Image
        className={className}
        src={resolvedSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        unoptimized={unoptimized || isSanityImage}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

ImageWithFallback.displayName = 'ImageWithFallback';
