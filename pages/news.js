import { getClient } from "../lib/sanity.server";
import { styled } from "../theme/stitches.config";
import Link from "next/link";
import { urlFor } from "../lib/sanity";
import { groq } from "next-sanity";

import Header from "../components/Header";
import SEO from "../components/Seo";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Box from "../components/Box";
import Text from "../components/Text";

const Posts = ({ data }) => {
  const allPosts = data.page || [];
  return (
    <>
      <SEO
        seoData={{
          seo_title: "News",
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
            mb: "$1",
          },
        }}
      >
        <Text
          as="h2"
          css={{
            color: "$primary",
            paddingBottom: "$7",
            "@bp2": {
              pb: "$4",
            },
          }}
        >
          Posts
        </Text>
        <Box
          css={{
            //use grid for a 3x3 grid
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {allPosts.map((item) => (
            <Box css={{ mb: "$4" }}>
              <Link href={`/posts/${item.slug.current}`}>
                <a>
                  <Box
                    css={{
                      display: "flex",
                      flexDirection: "row",

                      boxShadow: "$2",
                      br: "$1",
                      "@bp2": {
                        flexDirection: "column",
                      },
                    }}
                  >
                    <StyledImage
                      src={urlFor(item.mainImage).width(400)}
                      alt={item.name}
                    />
                    <Box
                      css={{
                        p: "$6",
                        "@bp2": {
                          px: "$4",
                        },
                      }}
                    >
                      <Text as="h5" css={{ mt: "0" }}>
                        {item.title}
                      </Text>
                      <Text size="small" css={{ wrap: "auto" }}>
                        Sed haec quis possit intrepidus aestimare tellus. Sed
                        haec quis possit intrepidus aestimare tellus....
                      </Text>
                    </Box>
                  </Box>
                </a>
              </Link>
            </Box>
          ))}
        </Box>
      </Section>
      <Footer />
    </>
  );
};

export default Posts;

const PostsQuery = groq`*[_type=="post"]
`;

export async function getStaticProps() {
  const page = await getClient().fetch(PostsQuery);

  const data = { page };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

const StyledImage = styled("img", {
  objectFit: "cover",
  width: "auto",
  bblr: "$1",
  btlr: "$1",
  "@bp2": {
    width: "100%",
    borderRadius: "0",
  },
});
