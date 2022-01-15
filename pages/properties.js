import { getClient } from "../lib/sanity.server";

import { styled } from "../theme/stitches.config";
import Link from "next/link";
import Header from "../components/Header";
import SEO from "../components/Seo";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Box from "../components/Box";
import Text from "../components/Text";
import Modal from "../components/Modal";
import FadeIn from "../components/FadeIn";
import { urlFor } from "../lib/sanity";
import { groq } from "next-sanity";
const Properties = ({ data }) => {
  const allProperties = data.page || [];
  return (
    <>
      <SEO
        seoData={{
          seo_title: "Properties",
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
        <Text
          as="h2"
          css={{
            color: "$dark",
            paddingBottom: "$3",
            "@bp1": { textAlign: "center" },
          }}
        >
          Active Acquisitions
        </Text>
        <Box
          css={{
            //use grid for a 3x3 grid
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 300px))",
            gridGap: "$4",
            gridAutoRows: "minmax(auto, auto)",
            gridAutoFlow: "row dense",
            jc: "center",

            "@bp2": {
              gridGap: "$3",
              justifyContent: "center",
              alignItems: "flex-start",
            },
            "@bp1": {
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          {allProperties.map(
            (item) =>
              item?.summary && (
                <FadeIn>
                  <Modal data={item}>
                    <StyledImage
                      src={urlFor(item.image).width(300).height(300)}
                      alt={item.name}
                    />

                    <Text css={{ color: "$dark" }} as="h5">
                      {item.name}
                    </Text>
                    <Text
                      css={{
                        color: "$primary",
                        "@bp1": { fontWeight: "500" },
                      }}
                      size="small"
                    >
                      {item.city_state}
                    </Text>
                  </Modal>
                </FadeIn>
              )
          )}
        </Box>
      </Section>

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
        <Text
          as="h2"
          css={{
            color: "$dark",
            paddingBottom: "$3",
            "@bp1": { textAlign: "center" },
          }}
        >
          Completed Acquisitions
        </Text>

        <Box
          css={{
            //use grid for a 3x3 grid
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 300px))",
            gridGap: "$4",
            gridAutoRows: "minmax(auto, auto)",
            gridAutoFlow: "row dense",
            jc: "center",

            "@bp2": {
              gridGap: "$3",
              justifyContent: "center",
              alignItems: "flex-start",
            },
            "@bp1": {
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          {allProperties.map(
            (item) =>
              !item?.summary && (
                <FadeIn>
                  <Modal data={item}>
                    <StyledImage
                      src={urlFor(item.image).width(300).height(300)}
                      alt={item.name}
                    />

                    <Text css={{ color: "$dark" }} as="h5">
                      {item.name}
                    </Text>
                    <Text
                      css={{
                        color: "$primary",
                        "@bp1": { fontWeight: "500" },
                      }}
                      size="small"
                    >
                      {item.city_state}
                    </Text>
                  </Modal>
                </FadeIn>
              )
          )}
        </Box>
      </Section>
      <Footer />
    </>
  );
};

export default Properties;

const PropertiesQuery = groq`*[_type=="property"]
`;

export async function getStaticProps() {
  const page = await getClient().fetch(PropertiesQuery);

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
  "@bp1": {
    height: "150px",
  },
});
