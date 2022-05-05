import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import ProductSection from "../sections/product-section";
import axios from "data/axios";

export default function IndexPage({ data }) {
  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="NextJS Landing Page" />
        <ProductSection data={data} />
      </Layout>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const response = await axios.get("/products");
  return {
    props: { data: response.data },
  };
}
