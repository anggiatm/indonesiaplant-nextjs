import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import ProdutDetail from "sections/product-detail";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="NextJS Landing Page" />
        <ProdutDetail />
      </Layout>
    </ThemeProvider>
  );
}
