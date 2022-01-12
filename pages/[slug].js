import { getClient } from "../lib/sanity.server";
import { styled } from "../theme/stitches.config";

import { groq } from "next-sanity";

import PortableText from "../components/PortableText";
import Section from "../components/Section";
import Header from "../components/Header";
import SEO from "../components/Seo";
import Footer from "../components/Footer";

const Team = ({ pageData }) => {
  return (
    <>
      <SEO seoData={pageData?.seo} />
      <Header />

      <Section
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
        }}
        css={{
          margin: "auto",
          pt: "0",
          "h3, h4": {
            mt: "$7",
          },
          "h2, h4, h6": {
            color: "$primary",
          },
        }}
      >
        <PortableText blocks={pageData?.pageBuilder} />
      </Section>
      <Footer />
    </>
  );
};

export async function getStaticPaths(poop) {
  const paths = await getClient().fetch(
    groq`*[_type == "page" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const pageData = await getClient().fetch(
    groq`
    *[_type == "page" && slug.current == $slug]{
  ...,
      pageBuilder[] {
      ...,
      body[] {
      ...,
        internal_link[]->
      }

    }
      }[0]
  `,
    { slug }
  );
  return {
    props: {
      pageData,
    },
  };
}

export default Team;

const StyledImage = styled("img", {
  maxWidth: "300px",
  float: "right",
  mx: "$7",
  mb: "$5",
});
