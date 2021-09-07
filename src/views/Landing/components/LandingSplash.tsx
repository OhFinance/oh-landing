import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { Flex } from "@ohfinance/oh-ui";
import OhBrand from "assets/img/oh-brand.png";
import { useMobile } from "@ohfinance/oh-ui";
import { urls } from "urls";

export const LandingSplash = () => {
  const mobile = useMobile();

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" align="center" gutterBottom>
        <b>
          Earn More with your{" "}
          <Box component="span" color="secondary.main">
            DeFi
          </Box>{" "}
          Dollar
        </b>
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph>
        Oh! Finance is an optimized yield-generation protocol, focused on
        reducing risk and increasing volume exposure. Start earning{" "}
        <Box component="span" color="secondary.main">
          <b>industry-leading interest rates</b>
          {/* <b>an average
          of X% APY</b> */}
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
            href={urls.deck}
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
  );
};
