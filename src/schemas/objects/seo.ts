export default {
  title: "SEO / Share Settings",
  name: "seo",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      title: "Meta Description",
      name: "metaDesc",
      type: "text",
      rows: 3,
      description: "Description for search engines.",
      validation: (Rule) =>
        Rule.max(150).warning(
          "Longer descriptions may be truncated by search engines"
        ),
    },
    {
      name: "tags",
      title: "Keywords",
      description: "Keywords for search engines",
      type: "tags",
      options: {
        isHighlighted: true,
      },
    },
    {
      title: "Share Graphic",
      name: "ogImage",
      type: "figure",
      description: "Share graphics will be cropped to 1200x630, and replace any cover image already uploaded",
    },
  ],
};