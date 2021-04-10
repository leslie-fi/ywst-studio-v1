export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  // __experimental_actions: ['create','update', 'publish'], // disable for initial publish
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'figure',
      title: 'Cover Image',
      type: 'figure'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'This can be used to schedule post for publishing',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText',
    },
    {
      name: 'tags',
      title: 'Keywords',
      description: 'Keywords for search engines',
      type: 'tags',
      options: {
        isHighlighted: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'figure',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
