import { Box, Grid } from "@material-ui/core";
import {
  Display,
  Flex,
  OH_FLYWHEEL_URL,
  Subtitle,
  Title,
  useMobile,
} from "@ohfinance/oh-ui";

export const HomeFlywheel = () => {
  const mobile = useMobile();

  return (
    <Display center>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={4}
      >
        <Grid item xs={12} md={8}>
          <Title align="center" gutterBottom>
            <b>
              DeFi Designed{" "}
              <Box component="span" color="secondary.main">
                Smarter
              </Box>
            </b>
          </Title>
          <Subtitle align="center" paragraph>
            Users deposit funds to earn APY and get rewarded with Oh! Finance
            Governance Tokens. As a result, the protocol earns more revenue on
            investment strategies. Protocol revenue is then used to buyback and
            burn Oh! Finance Governance Tokens, effectively passing value back
            to shareholders.
          </Subtitle>
        </Grid>
        <Grid item xs={12} md={8}>
          <Flex center>
            <img
              src={OH_FLYWHEEL_URL}
              alt="oh-flywheel"
              width={mobile ? 250 : 500}
            />
          </Flex>
        </Grid>
      </Grid>
    </Display>
  );
};
