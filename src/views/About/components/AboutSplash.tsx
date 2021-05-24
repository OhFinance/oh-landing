import { Box, Button, Grid, Typography } from "@material-ui/core";
import { Flex } from "@ohfinance/oh-ui";
import DeFiDollar from "assets/img/defi-dollar.png";
import { useMobile } from "@ohfinance/oh-ui";
import { urls } from "urls";

export const AboutSplash = () => {
  const mobile = useMobile();

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12} md={4}>
        <Typography
          variant="h3"
          gutterBottom
          align={mobile ? "center" : "left"}
        >
          <b>
            Do{" "}
            <Box component="span" color="secondary.main">
              More
            </Box>{" "}
            with your DeFi Dollar
          </b>
        </Typography>
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
            href={urls.deck}
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
  );
};
