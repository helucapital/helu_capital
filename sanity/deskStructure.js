import S from "@sanity/desk-tool/structure-builder";
import {
  ChatBubbleIcon,
  PersonIcon,
  HomeIcon,
  IdCardIcon,
} from "@radix-ui/react-icons";

const hiddenDocTypes = (listItem) =>
  ![
    "post",
    "person",
    "property",
    "post",
    "page",
    "button",
    "category",
    "hero",
    "review",
    "section",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site")
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("Team")
                .schemaType("person")
                .child(S.documentTypeList("person").title("Team"))
                .icon(PersonIcon),
              S.listItem()
                .title("Properties")
                .schemaType("property")
                .child(S.documentTypeList("property").title("Properties"))
                .icon(HomeIcon),
              S.listItem()
                .title("News")
                .schemaType("post")
                .child(S.documentTypeList("post").title("News"))
                .icon(IdCardIcon),
              S.listItem()
                .title("Reviews")
                .schemaType("review")
                .child(S.documentTypeList("review").title("Reviews"))
                .icon(ChatBubbleIcon),
            ])
        ),
      S.listItem()
        .title("Pages")
        .schemaType("page")
        .child(S.documentTypeList("page").title("Pages")),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
