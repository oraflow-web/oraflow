'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fallbackText?: string;
  unoptimized?: boolean;
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
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  if (hasError || !src) {
    return (
      <span className="image-with-fallback__placeholder">
        {fallbackText ?? alt}
      </span>
    );
  }

  return (
    <>
      {isLoading && (
        <span
          className="image-with-fallback__loader"
          aria-hidden="true"
          style={{ width, height }}
        />
      )}
      <Image
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        unoptimized={unoptimized}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

ImageWithFallback.displayName = 'ImageWithFallback';
