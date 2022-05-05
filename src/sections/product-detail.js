/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image, Grid, Card, Button } from "theme-ui";
import SectionName from "components/product-name";
import SectionHeader from "components/section-header";
import Rating from "components/rating";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";

import Avatar1 from "assets/products/product-1.jpg";
import Avatar2 from "assets/products/product-2.jpg";
import Avatar3 from "assets/products/product-3.jpg";
import Avatar4 from "assets/products/product-4.jpg";

const data = [
  {
    id: 1,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: Avatar1,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 4,
  },
  {
    id: 2,
    title: "Design Quality & performance",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: Avatar2,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 5,
  },
  {
    id: 3,
    title: "Layout and organized layers",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: Avatar3,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 5,
  },
  {
    id: 4,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: Avatar4,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 1,
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: true,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  dotListClass: "",
  draggable: true,
  focusOnSelect: true,
  infinite: false,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: true,
  sliderClass: "",
  slidesToSlide: 1,
};

export default function TestimonialCard() {
  return (
    <Container>
      <SectionName title="Meet Client Satisfaction" />
      <Card
        sx={{
          border: "1px solid",
          borderColor: "rgba(38, 78, 118, 0.3)",
          pt: "40px",
          mt: "-50px",
          py: "50px",
          boxShadow: "0px 0px 5px rgba(38, 78, 118, 0.3)",
          bg: "white",
          borderRadius: "10px",
        }}
      >
        <Grid sx={styles.grid}>
          <Box>
            <Carousel {...carouselParams}>
              {data.map((item) => (
                <Box sx={styles.galery} key={item.id}>
                  <Image src={item.avatar} alt="client avatar" sx={{ borderRadius: "10px" }} />
                </Box>
              ))}
            </Carousel>
          </Box>
          <Box sx={{ variant: "header" }}>
            <Heading
              as="h2"
              sx={{
                variant: "header.title",
              }}
            >
              Detail
            </Heading>
            <Text>Product Name :</Text>
            <Text>Species :</Text>
            <Text>Category :</Text>
            <Text>Price :</Text>
            <Text>Bulk Price :</Text>
            <Text>Product Name :</Text>
          </Box>
        </Grid>

        <Box sx={styles.spec}>
          <Heading
            as="h2"
            sx={{
              variant: "header.title",
            }}
          >
            Description
          </Heading>
          <Text as="p">
            sdajkhfjk hsdfjkh fjhf dj jkshf jasdfhdjshf hsd hjksdhjfhds hjk fhsjhhdsjfh hsf hjkh sdf
          </Text>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
          <Button>Order</Button>
        </Box>
      </Card>
    </Container>
  );
}

const styles = {
  spec: {
    mx: "10px",
    my: "10px",
    px: "5px",
    py: "3px",
    bg: "white",
    transition: "all 0.3s",
    borderRadius: "6px",
  },

  grid: {
    gridTemplateColumns: ["repeat(1,1fr)", "repeat(1,1fr)", "repeat(1,1fr)", "55% 45%", "55% 45%"],
  },

  galery: {
    transition: "all 0.3s",
    m: [
      "10px 5px 10px 5px",
      "10px 5px 10px 5px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
  },

  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
};
