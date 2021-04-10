import client from 'part:@sanity/base/client';
import { MdLink } from 'react-icons/md';

function myAsyncSlugifier(input) {
  const query = '*[_id == $id][0]';
  const params = { id: input._ref };
  return client.fetch(query, params).then((doc) => {
    return doc.title.toLowerCase().replace(/\s+/g, '-').slice(0, 200);
  });
}

export default {
  name: 'route',
  type: 'document',
  title: 'Routes',
  icon: MdLink,
  initialValue: {
    useSiteTitle: false,
  },
  fieldsets: [
    {
      title: 'Visibility',
      name: 'visibility',
    },
  ],
  fields: [
    {
      name: 'page',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      description: 'The page you want to appear at this path. Remember it needs to be published.',
      to: [
        {
          type: 'page',
        },
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      description: 'This is the website path the page will accessible on',
      title: 'Path',
      // validation: (Rule) =>
      //   Rule.required().custom((slug) => {
      //     if (slug && slug.current && slug.current === '/') {
      //       return 'Cannot be /';
      //     }
      //     return true;
      //   }),
      options: {
        source: 'page',
        // Read more: https://www.sanity.io/docs/slug-type
        slugify: myAsyncSlugifier,
      },
    },

    {
      title: 'Include in sitemap',
      description: 'For search engines. Will be generateed to /sitemap.xml',
      name: 'includeInSitemap',
      type: 'boolean',
      fieldset: 'visibility',
    },
    {
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines like google',
      name: 'disallowRobots',
      type: 'boolean',
      fieldset: 'visibility',
    }

  ],
  preview: {
    select: {
      title: 'slug.current',
      subtitle: 'page.title',
    },
    prepare({ title, subtitle }) {
      return {
        title: ['/', title].join(''),
        subtitle,
      };
    },
  },
}
;
