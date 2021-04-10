export default {
  widgets: [
    {
      name: "sanity-tutorials",
    },
    {
      name: "project-info",
      options: {
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/leslie-fi/ywst-studio-v1",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://ywst-web-v1.vercel.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { width: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Last edited documents",
        order: "_updatedAt desc",
      },
      layout: {
        width: "auto",
        height: "large",
      },
    },
    {
      name: "document-list",
      options: {
        title: "Last edited posts",
        order: "_updatedAt desc",
        types: ["post"],
      },
      layout: {
        width: "auto",
        height: "medium",
      },
    },
  ],
};
