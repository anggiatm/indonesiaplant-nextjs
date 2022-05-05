/** @jsx jsx */
import { jsx, Container, Box, Flex, Grid } from "theme-ui";
import { keyframes } from "@emotion/core";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import ProductCard from "components/product-card";
import SectionFilter from "../components/filter";
import ButtonGroup from "components/button-group";
import SectionHeader from "components/section-header";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

import Product1 from "assets/products/product-1.jpg";
import Product2 from "assets/products/product-2.jpg";
import Product3 from "assets/products/product-3.jpg";
import Product4 from "assets/products/product-4.jpg";
import Product5 from "assets/products/product-5.jpg";
import Product6 from "assets/products/product-6.jpg";

export default function Product({ data }) {
  return (
    <section id="pricing" sx={{ variant: "section.pricing" }}>
      <Container>
        <Box sx={styles.pricingWrapper}>
          <SectionFilter />
          <Grid sx={styles.grid}>
            {data.map((item) => (
              <ProductCard
                image={item.imgSrc}
                id={item.id}
                key={item.id}
                altText={item.altText}
                name={item.name}
                price={item.price}
                category={item.category}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  grid: {
    mt: [0, 0, 0, 0],
    gridGap: ["0px 10px", "0px 10px", "0px 10px", "0px 25px"],
    gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"],
  },
  pricingWrapper: {
    mb: "-40px",
    mt: "-40px",
    mx: -3,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    "&.pricing__wrapper .package__card": {
      ".package__header": {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      ".package__price": {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    ".carousel-container": {
      width: "100%",
      "> ul > li ": {
        display: "flex",
      },
    },
    ".button__group": {
      display: ["flex", null, null, null, "none"],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: "flex",
    flexShrink: 0,
    flex: "1 1 auto",
  },
  buttonGroup: {
    justifyContent: "center",
    mb: "7",
    mt: ["-15px", "-35px"],
    position: "relative",
    zIndex: 2,
  },
  buttonGroupInner: {
    display: "flex",
    padding: "7px",
    margin: "0 auto",
    borderRadius: "5px",
    backgroundColor: "#F7F8FB",
    button: {
      border: 0,
      padding: ["15px 20px", "15px 27px"],
      borderRadius: "5px",
      color: "text",
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: "transparent",
      cursor: "pointer",
      fontFamily: "body",
      letterSpacing: "-0.24px",
      transition: "all 0.3s",
      "&.active": {
        color: "#0f2137",
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 4px rgba(38, 78, 118, 0.1)",
      },
      "&:focus": {
        outline: 0,
      },
    },
  },
};
