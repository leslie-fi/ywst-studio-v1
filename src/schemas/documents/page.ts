export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },

    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText',
    },
    { name: 'seo', type: 'seo', fieldset: 'metadata' },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'seo.figure',
    },
  },
};
