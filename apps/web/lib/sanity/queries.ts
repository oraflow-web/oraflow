import { client } from './client';

// All categories by language
export async function getCategories(lang: string) {
  return client.fetch(
    `*[_type == "category" && language == $lang] | order(title asc) {
      _id,
      title,
      "slug": slug.current,
      description
    }`,
    { lang },
  );
}

// Single category by slug
export async function getCategoryBySlug(slug: string, lang: string) {
  return client.fetch(
    `*[_type == "category" && slug.current == $slug && language == $lang][0] {
      _id,
      title,
      "slug": slug.current,
      description
    }`,
    { slug, lang },
  );
}

// All posts by language
export async function getPosts(lang: string) {
  return client.fetch(
    `*[_type == "post" && language == $lang] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      "category": category->{title, "slug": slug.current},
      images,
      _createdAt
    }`,
    { lang },
  );
}

// Posts by category
export async function getPostsByCategory(categorySlug: string, lang: string) {
  return client.fetch(
    `*[_type == "post" && language == $lang && category->slug.current == $categorySlug] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      "category": category->{title, "slug": slug.current},
      images,
      _createdAt
    }`,
    { categorySlug, lang },
  );
}

// Single post by slug
export async function getPostBySlug(slug: string, lang: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug && language == $lang][0] {
      _id,
      title,
      "slug": slug.current,
      "category": category->{title, "slug": slug.current},
      images,
      body,
      _createdAt
    }`,
    { slug, lang },
  );
}

// Latest posts (for homepage)
export async function getLatestPosts(lang: string, limit: number = 5) {
  return client.fetch(
    `*[_type == "post" && language == $lang] | order(_createdAt desc)[0...$limit] {
      _id,
      title,
      "slug": slug.current,
      "category": category->{title, "slug": slug.current},
      images,
      _createdAt
    }`,
    { lang, limit },
  );
}
