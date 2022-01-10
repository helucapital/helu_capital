export default {
  title: "Button",
  name: "button",
  type: "document",
  description: "A button",
  fields: [
    { name: "text", title: "Text", type: "string" },
    {
      name: "internal_link",
      title: "Internal Link",
      type: "array",
      validation: (Rule) => Rule.max(1),

      of: [
        {
          name: "link",
          title: "Link",
          type: "reference",
          options: {
            disableNew: true,
          },
          to: [{ type: "page" }, { type: "post" }, { type: "person" }],
        },
      ],
    },

    { name: "link", title: "Link", type: "string" },
    { name: "link_type", title: "Internal Link ", type: "boolean" },
    { name: "external_link", title: "External Link", type: "url" },
  ],
};
