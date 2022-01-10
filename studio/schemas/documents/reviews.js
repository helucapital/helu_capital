export default {
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },

    {
      name: "body",
      title: "Body",
      type: "text",
      validation: (Rule) =>
        Rule.required().max(500).error("Shorter reviews are usually better"),
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "headline",
    },
  },
};
