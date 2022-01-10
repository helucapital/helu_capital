export default {
  name: "pageBuilder",
  type: "array",
  title: "Page Builder",
  of: [
    {
      type: "pageBuilderContent",
      title: "Content",
    },
    {
      type: "pageBuilderColumns",
      title: "Columns",
    },
    {
      type: "mainImage",
      title: "Background Image",
    },
    {
      type: "carousel",
      title: "Carousel",
    },
  ],
};
