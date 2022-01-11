export default {
  name: "page",
  type: "document",
  title: "Pages",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Custom Page",
      name: "custom_page",
      type: "boolean",
    },
    {
      name: "meta_title",
      type: "string",
      title: "Meta Title",
      validation: (Rule) =>
        Rule.required().warning(
          `No Meta Title has been added, default title will be used.`
        ),
    },
    {
      name: "meta_description",
      type: "string",
      title: "Meta Description",
      validation: (Rule) =>
        Rule.required().warning(
          `No Meta Description has been added, default description will be used.`
        ),
    },

    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required().error(`No Slug has been added.`),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "pageBuilder",
      type: "pageBuilder",
      title: "Page Builder",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo-tools", // use seo-tools type
      options: {
        baseUrl: "http://localhost:3000/", // (REQUIRED) This is the baseUrl for your site
        baseUrl(doc) {
          return "http://localhost:3000/"; // for dynamic baseUrls
        },
        slug(doc) {
          // (REQUIRED) a function to return the sug of the current page, which will be appended to the baseUrl
          return doc.slug.current;
        },
        fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
        content(doc) {
          return "simple html representation of your doc"; // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
        },
        title(doc) {
          return "page title"; // (OPTIONAL) return page title otherwise inferred from scrape
        },
        description(doc) {
          return "page description"; // (OPTIONAL) return page description otherwise inferred from scrape
        },
        locale(doc) {
          return "page locale"; // (OPTIONAL) return page locale otherwise inferred from scrape
        },
        contentSelector: "body", // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare({ title = "No title", slug = {} }) {
      return {
        title,
        subtitle: slug.current,
      };
    },
  },
};
