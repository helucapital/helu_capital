export default {
  name: "carousel",
  type: "object",
  title: "Carousel",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Type",
      name: "type",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Properties", value: "property" },
          { title: "Reviews", value: "review" },
        ],
      },
    },
    {
      title: "Items",
      name: "items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "property" }, { type: "review" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "type",
      subtitle: "a carousel of items",
    },
  },
};
