export default {
  name: "page",
  type: "document",
  title: "Page",
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "figure",
      title: "Cover Image",
      type: "figure",
    },
    {
      name: "body",
      title: "Body",
      type: "bodyPortableText",
    },
    {
      name: "excerpt",
      type: "excerptPortableText",
      title: "Excerpt",
      description:
        "This ends up on summary pages, on Google, when people share your post in social media.",
      fieldset: "metadata"
    },
    { name: "seo", type: "seo", fieldset: "metadata" },
  ],

  preview: {
    select: {
      title: "title",
      media: "seo.ogImage",
    },
  },
};
