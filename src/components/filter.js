import { Box, Text, Button, Input, Select, Card, Grid } from "theme-ui";
export default function Filter() {
  return (
    <Card sx={styles.filter}>
      <Grid sx={styles.grid}>
        <Box sx={styles.form}>
          <Text sx={styles.label}>Search</Text>
          <Input sx={styles.searchField} />
        </Box>
        <Box sx={styles.form}>
          <Text sx={styles.label}>Category</Text>
          <Select sx={styles.category}>
            <option>Beep</option>
            <option>Boop</option>
            <option>Blip</option>
          </Select>
        </Box>
        <Box sx={styles.form}>
          <Button sx={styles.button}>Filter</Button>
        </Box>
      </Grid>
    </Card>
  );
}

const styles = {
  grid: {
    gridGap: "0px",
    gridTemplateColumns: ["1fr", "1fr", "2fr 1fr auto"],
  },
  category: {
    borderRadius: "5px",
    borderColor: "gray",
    height: "40px",
    py: "5px",
    my: "5px",
    backgroundColor: "white",
  },
  searchField: {
    borderRadius: "5px",
    backgroundColor: "white",
    borderColor: "gray",
    height: "40px",
    py: "5px",
    my: "5px",
    letterSpacing: ".3px",
  },
  button: {
    borderRadius: "5px",
    height: "45px",
    py: "0px",
    my: "0px",
  },
  label: {
    height: ["28px", null, null, "32px"],
    fontWeight: "bold",
    fontSize: 1,
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "primary",
    position: "absolute",
    top: ["-6px", "-2px"],
    left: "5px",
    letterSpacing: "-.14px",
    px: "12px",
  },

  form: {
    borderRadius: 5,
    position: "relative",
    transition: "all 0.3s",
    p: ["12px 10px", null, null, "15px"],
    width: ["100%", "100%", "100%"],
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      top: 0,
      left: 0,
      transition: "all 0.3s",
      zIndex: -1,
    },
  },

  filter: {
    backgroundColor: "rgba(38, 78, 118, 0.1)",
    borderRadius: 5,
    position: "relative",
    transition: "all 0.3s",
    p: ["15px 15px", null, null, "15px"],
    width: "100%",
    mb: "40px",
    mt: "70px",
    mx: [0, "auto", 0],
  },
};
