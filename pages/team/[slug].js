import { getClient } from "../../lib/sanity.server";
import { styled } from "../../theme/stitches.config";
import { urlFor } from "../../lib/sanity";
import { groq } from "next-sanity";

import PortableText from "../../components/PortableText";
import Section from "../../components/Section";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/Seo";
import Text from "../../components/Text";
import Box from "../../components/Box";

const Team = ({ person }) => {
  const { name, position, image, body = [] } = person;
  return (
    <>
      <SEO
        seoData={{
          seo_title: name,
        }}
      />
      <Header />

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
        }}
        css={{
          pt: "$12",
          pb: "$12",
          margin: "auto",
          maxWidth: "$3",
          display: "flex",

          "h3, h4": {
            mt: "$7",
          },
          // "h2, h4, h6": {
          //   color: "$primary",
          // },

          "@bp2": {
            flexWrap: "wrap",
            py: "$6",
          },
        }}
      >
        {image && <StyledImage src={urlFor(image).width(500).url()} />}
        <Box>
          <Text as="h2">{name}</Text>
          <Text as="h6">{position}</Text>
          <PortableText blocks={body} />
        </Box>
      </Section>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "person" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const person = await getClient().fetch(
    groq`
    *[_type == "person" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      person,
    },
  };
}

export default Team;

const StyledImage = styled("img", {
  maxWidth: "300px",
  objectFit: "cover",
  mr: "$6",
  mb: "$5",
  "@bp1": {
    margin: "auto",
    pb: "$4",
    float: "none",
    width: "100%",
    maxWidth: "none",
    maxHeight: "340px",
    objectFit: "cover",
    objectPosition: "top",
  },
});
