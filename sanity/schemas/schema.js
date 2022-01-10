// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas

// documents
import reviews from "./documents/reviews";
import post from "./documents/post";
import person from "./documents/person";
import page from "./documents/page";
import property from "./documents/property";

// objects
import pageBuilder from "./objects/pageBuilder";
import pageBuilderContent from "./objects/pageBuilderContent";
import pageBuilderColumns from "./objects/pageBuilderColumns";
import column from "./objects/column";
import blockContent from "./objects/blockContent";
import mainImage from "./objects/image";
import category from "./objects/category";
import hero from "./objects/hero";
import section from "./objects/section";
import button from "./objects/button";
import carousel from "./objects/carousel";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    button,
    blockContent,
    category,
    carousel,
    column,
    hero,
    mainImage,
    reviews,
    property,
    post,
    person,
    page,
    pageBuilder,
    pageBuilderContent,
    pageBuilderColumns,
    section,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
