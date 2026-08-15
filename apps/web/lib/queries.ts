import { groq } from "next-sanity";

export const categoriesQuery = groq`
  *[_type == "category" && language == $lang] {
    _id,
    title,
    slug,
    description
  }
`;

export const postsByCategoryQuery = groq`
  *[_type == "post" && category->slug.current == $category && language == $lang] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug && language == $lang][0] {
    _id,
    title,
    slug,
    body,
    coverImage,
    excerpt,
    publishedAt,
    category-> {
      title,
      slug
    }
  }
`;
