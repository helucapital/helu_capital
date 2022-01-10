import { getClient } from "../lib/sanity.server";
import { groq } from "next-sanity";

import Box from "../components/Box";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortableText from "../components/PortableText";
import SEO from "../components/Seo";

const pageQuery = groq`*[_type == "page" && title == "Home Page"]{
  ...,
    pageBuilder[] {
      ...,
      items[]->,
      body[] {
      ...,
        internal_link[]->
      }
    }
  }`;

export default function Home({ data }) {
  return (
    <>
      <SEO seoData={data?.[0]?.seo} />
      <Header />
      <PortableText blocks={data?.[0]?.pageBuilder} />
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getClient(preview).fetch(pageQuery);

  return {
    props: { data },
  };
}
