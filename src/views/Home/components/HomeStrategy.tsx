import { Grid, Typography } from "@material-ui/core";
import { Display, Flex } from "@ohfinance/oh-ui";
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
          <Typography
            variant="h3"
            align={mobile ? "center" : "left"}
            gutterBottom
          >
            <b>Yield Index</b>
          </Typography>
          <Typography
            variant="subtitle1"
            align={mobile ? "center" : "left"}
            paragraph
          >
            Volume across DeFi markets is not consistent, it moves according to
            market conditions and underlying funding. Risk is not consistent
            either, as protocols can accomplish similar results with different
            processes. Gain exposure to a managed index of DeFi strategies,
            designed to increase volume exposure and reduce Smart Contract risk.
          </Typography>
        </Grid>
      </Grid>
    </Display>
  );
};
