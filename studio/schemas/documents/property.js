export default {
  name: "property",
  title: "Properties",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      title: "Past Property",
      name: "past_property",
      type: "boolean",
    },
    {
      name: "units",
      title: "Number of units",
      type: "number",
    },
    {
      name: "year_built",
      title: "Year Built",
      type: "date",
      options: {
        dateFormat: "YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      title: "Property Website",
      name: "href",
      type: "url",
      validation: (Rule) => [
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
        Rule.required().warning(`No Url has been added `),
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required().error(`No slug has been added `),
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
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) =>
        Rule.required().warning(
          `No phone number has been added, will default to 801.939.0726 `
        ),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "city_state",
      title: "City / State",
      type: "string",
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      validation: (Rule) => [
        Rule.required().warning(
          `No summary has been added, will be added as a Past Property`
        ),
        Rule.max(650).error(
          `Your Summary is too long. It should be under 650 characters.`
        ),
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "summary",
    },
    prepare(selection) {
      const { title, media, subtitle } = selection;
      return {
        title: `${title}`,
        media: media,
        subtitle: `${subtitle ? subtitle : "Past property"}`,
      };
    },
  },
};
