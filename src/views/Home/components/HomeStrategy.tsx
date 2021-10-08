import { Box, Grid } from "@material-ui/core";
import { Display, Flex, Subtitle, Title } from "@ohfinance/oh-ui";
import OhStrategy from "assets/img/oh-strategy.png";
import { useMobile } from "@ohfinance/oh-ui";

export const HomeStrategy = () => {
  const mobile = useMobile();

  return (
    <Display center column>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={12} md={4}>
          <Flex justify={mobile ? "center" : "flex-start"} align="center">
            <img src={OhStrategy} alt="oh-strategy" width={300} />
          </Flex>
        </Grid>
        <Grid item xs={12} md={4}>
          <Title align={mobile ? "center" : "left"}>
            <b>
              Defi Designed{" "}
              <Box component="span" color="secondary.main">
                Smarter
              </Box>
            </b>
          </Title>
          <Subtitle align={mobile ? "center" : "left"}>
            Volume across DeFi markets is not consistent, it moves according to
            market conditions and underlying funding. Risk is not consistent
            either, as protocols can accomplish similar results with different
            processes. Gain exposure to a managed index of DeFi strategies,
            designed to increase volume exposure and reduce Smart Contract risk.
          </Subtitle>
        </Grid>
      </Grid>
    </Display>
  );
};
