export default {
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      title: "Columns",
      name: "columns",
      type: "array",
      of: [
        {
          title: "Column",
          name: "column",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
