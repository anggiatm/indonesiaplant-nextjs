import React from "react";
import { Box, Text, Heading } from "theme-ui";

export default function SectionName({ title, slogan, isWhite }) {
  return (
    <Box>
      <Heading
        as="h2"
        sx={{
          pt: "120px",
          mt: "10px",
          mb: "-5px",
          pb: "0px",
          variant: "sectionHeader.title",
          color: isWhite ? "white" : "primary",
          borderBottom: "1px solid",
          borderBottomColor: "border_color",
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
