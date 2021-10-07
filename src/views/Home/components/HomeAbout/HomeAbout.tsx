import { Box, Button, Grid, Typography } from "@material-ui/core";
import { Display, Flex, Heading, PITCH_DECK_URL } from "@ohfinance/oh-ui";
import DeFiDollar from "assets/img/defi-dollar.png";
import { useMobile } from "@ohfinance/oh-ui";
import { HomeFeatureGrid } from "./components/HomeFeatureGrid";

export const HomeAbout = () => {
  const mobile = useMobile();

  return (
    <Display center>
      <Flex column>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} md={4}>
            <Heading
              variant="h3"
              gutterBottom
              align={mobile ? "center" : "left"}
            >
              <b>
                Defi Done{" "}
                <Box component="span" color="secondary.main">
                  Better
                </Box>
              </b>
            </Heading>
            <Typography
              variant="subtitle1"
              paragraph
              align={mobile ? "center" : "left"}
            >
              Oh! Finance aggregates popular DeFi investment strategies and
              automatically compounds your earnings.
            </Typography>
            <Flex justify={mobile ? "center" : "flex-start"}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                target="_blank"
                href={PITCH_DECK_URL}
              >
                Learn More
              </Button>
            </Flex>
          </Grid>
          <Grid item xs={12} md={4}>
            <Flex justify={mobile ? "center" : "flex-end"} align="center">
              <img src={DeFiDollar} alt="ohfinance-brand" width={300} />
            </Flex>
          </Grid>
        </Grid>

        <HomeFeatureGrid />
      </Flex>
    </Display>
  );
};
