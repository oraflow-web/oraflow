import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Kategorija",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Naziv",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Opis",
      type: "text",
      rows: 3,
    }),
  ],
});
