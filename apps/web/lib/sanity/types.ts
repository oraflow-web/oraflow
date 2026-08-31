export type Category = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
};

export type Post = {
  _id: string;
  title: string;
  slug: string;
  category: {
    title: string;
    slug: string;
  };
  images: SanityImage[];
  body?: any[];
  _createdAt: string;
};

export type SanityImage = {
  _key?: string;
  _type: 'image';
  alt?: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
};
