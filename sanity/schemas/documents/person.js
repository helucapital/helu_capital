export default {
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    // schema number for sort order field
    {
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required().error(`No Slug has been added.`),
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    { name: "body", title: "Body", type: "blockContent" },
  ],
  orderings: [
    {
      title: "Order Number",
      name: "sortOrderNumber",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "sortOrder",
    },
  },
};
