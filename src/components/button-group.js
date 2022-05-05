/** @jsx jsx */
import { jsx, Box, Container, Flex } from "theme-ui";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ButtonGroup({ next, previous }) {
  return (
    <Flex sx={{ width: "100%" }}>
      <Container sx={{ position: "relative", width: "100%" }}>
        <Box sx={styles.buttonLeft} className="button__group">
          <button onClick={previous} aria-hidden="Previous">
            <IoIosArrowBack />
          </button>
          <button onClick={next} aria-hidden="Next">
            <IoIosArrowForward />
          </button>
        </Box>
        <Box sx={styles.buttonRight} className="button__group"></Box>
      </Container>
    </Flex>
  );
}

const styles = {
  buttonLeft: {
    position: "absolute",
    width: "95%",
    display: "flex",
    justifyContent: "space-between",
    mb: -4,
    button: {
      bg: "transparent",
      border: "0px solid",
      fontSize: 70,
      cursor: "pointer",
      px: "2px",
      color: "primary",
      transition: "all 0.25s",
      "&:hover": {
        color: "text",
      },
      "&:focus": {
        outline: 1,
      },
    },
  },
};
