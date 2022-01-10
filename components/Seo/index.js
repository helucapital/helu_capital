import React from "react";
import Head from "next/head";
import image from "../../assets/images/favicon.ico";
const SEO = ({ seoData }) => {
  const {
    seo_title,
    meta_description = "",
    focus_keyword = "",
    focus_synonyms = [],
  } = seoData;

  const keywords = focus_synonyms.join(", ") + ", " + focus_keyword;
  return (
    <Head>
      <title>Helu {seo_title && `| ${seo_title}`}</title>
      <link rel="shortcut icon" type="image/x-icon" href={image.src}></link>
      <meta name="keywords" content={keywords} />

      <meta name="description" content={meta_description} />
      <meta property="og:title" content={seo_title} />
      <meta property="og:description" content={meta_description} />
      <meta property="og:url" content="http://localhost:3000/" />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default SEO;
