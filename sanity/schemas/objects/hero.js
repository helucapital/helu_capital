export default {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
