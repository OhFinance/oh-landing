import { Grid, Typography } from "@material-ui/core";
import { Flex } from "@ohfinance/oh-ui";
import OhFlywheel from "assets/img/oh-flywheel.png";
import { useMobile } from "@ohfinance/oh-ui";

export const AboutFlywheelRow = () => {
  const mobile = useMobile();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      spacing={2}
    >
      <Grid item xs={12} md={8}>
        <Typography variant="h3" align="center" gutterBottom>
          <b>Value Flywheel</b>
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph>
          Users deposit funds to earn APY and get rewarded with Oh! Finance
          Governance Tokens. As a result, the protocol earns more revenue on
          investment strategies. Protocol revenue is then used to buyback and
          burn Oh! Finance Governance Tokens, effectively passing value back to
          shareholders.
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Flex center>
          <img src={OhFlywheel} alt="oh-flywheel" width={mobile ? 300 : 500} />
        </Flex>
      </Grid>
    </Grid>
  );
};
