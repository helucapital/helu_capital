import { getClient } from "../lib/sanity.server";

import { styled } from "../theme/stitches.config";
import Link from "next/link";
import Header from "../components/Header";
import SEO from "../components/Seo";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Box from "../components/Box";
import FadeIn from "../components/FadeIn";
import Text from "../components/Text";
import { urlFor } from "../lib/sanity";
import { groq } from "next-sanity";

const team = ({ data }) => {
  const allTeam = data.page || [];

  return (
    <>
      <SEO
        seoData={{
          seo_title: "Team",
        }}
      />
      <Header />
      <Section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
        }}
        css={{
          py: "$8",
          margin: "auto",
          maxWidth: "$3",
          h5: {
            fontWeight: "bold",
            mt: "$4",
            mb: "$1",
          },
        }}
      >
        <Text as="h2" css={{ color: "$primary", paddingBottom: "$7" }}>
          Team
        </Text>
        <Box
          css={{
            //use grid for a 3x3 grid
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 300px))",
            gridGap: "$4",
            gridAutoRows: "minmax(auto, auto)",
            gridAutoFlow: "row dense",
            justifyItems: "center",
            alignItems: "center",
            justifyContent: "center",
            "@bp2": {
              gridGap: "$3",
            },
            "@bp1": {
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          {allTeam.map((item, index) => (
            <FadeIn>
              <Link href={`/team/${item.slug.current}`}>
                <a>
                  <StyledImage
                    src={urlFor(item.image).width(300).height(500)}
                    alt={item.name}
                  />

                  <h5>{item.name}</h5>
                  <Text size="small">{item.position}</Text>
                </a>
              </Link>
            </FadeIn>
          ))}
        </Box>
      </Section>
      <Footer />
    </>
  );
};

export default team;

const teamQuery = groq`*[_type=="person"] | order(sortOrder asc)`;

export async function getStaticProps() {
  const page = await getClient().fetch(teamQuery);

  const data = { page };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

const StyledImage = styled("img", {
  width: "300px",
  height: "320px",
  objectFit: "cover",
  // filter: "grayscale(1)",
  objectPosition: "top",
  transition: "filter .2s ease-in-out",
  "&:hover": {
    filter: "grayscale(0)",
  },
});
