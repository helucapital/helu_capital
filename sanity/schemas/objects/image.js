export default {
  name: "mainImage",
  type: "image",
  title: "Image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Full Width",
      name: "full_width",
      type: "boolean",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      title: "Center Image",
      name: "image_center",
      type: "boolean",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: "attribution",
      type: "string",
      title: "Attribution",
      validation: (Rule) => Rule.required(),
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "attribution",
    },
  },
};
