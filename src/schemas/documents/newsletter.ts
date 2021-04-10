export default {
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Subject Line',
      type: 'string',
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
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'bookmark' }],
        },
      ],
    },
  ],
};
