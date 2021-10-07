import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { Display, Flex, PITCH_DECK_URL, useMobile } from "@ohfinance/oh-ui";
import OhBrand from "assets/img/oh-brand.png";

export const HomeDisplay = () => {
  const mobile = useMobile();

  return (
    <Display column center offset>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          <b>
            Earn{" "}
            <Box component="span" color="secondary.main">
              More
            </Box>{" "}
            with your DeFi Dollar
          </b>
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph>
          Oh! Finance is an optimized yield-generation protocol, focused on
          reducing risk and increasing volume exposure. Start earning{" "}
          <Box component="span" color="secondary.main">
            <b>industry-leading interest rates</b>
          </Box>{" "}
          on stablecoins in just a few clicks.
        </Typography>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              target="_blank"
              href={PITCH_DECK_URL}
            >
              Learn More
            </Button>
          </Grid>
          {/* <Grid item>
          <Button variant="contained" color="primary">
            Launch App
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="default"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Learn More
          </Button>
        </Grid> */}
        </Grid>

        <Flex center my={4}>
          <img
            src={OhBrand}
            alt="oh-finance-brand"
            width={mobile ? "300px" : "500px"}
            height="auto"
          />
        </Flex>
      </Container>
    </Display>
  );
};
