const projectUrl = process.env.PREVIEW_URL || 'http://localhost:3000';

type Document = {
  _type: string;
  _id: string;
  slug?: { current: string };
};

const resolver = {
  route: (document: Document) =>
    !document.slug || !document.slug.current
      ? projectUrl
      : `${projectUrl}/${document.slug.current}`,

  page: (document: Document) => {
    const path =
      (document._id === 'index' || document._id === 'drafts.index')
        ? ''
        : document._id ?? ''
    return `${projectUrl}/${path}`;
  },

  post: (document: Document) => `${projectUrl}/blog/${document.slug.current}`,
  siteSettings: () => projectUrl,
};

export default function resolvePreviewUrl(document: Document) {
  return resolver[document._type]?.(document) || projectUrl;
}
