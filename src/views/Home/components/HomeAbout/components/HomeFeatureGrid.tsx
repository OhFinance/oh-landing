import { Grid } from "@material-ui/core";
import Simple from "assets/img/simple.png";
import Trustless from "assets/img/trustless.png";
import NonCustodial from "assets/img/non-custodial.png";
import { HomeFeature } from "./HomeFeature";

export const HomeFeatureGrid = () => {
  return (
    <Grid container alignItems="center" justify="center" spacing={2}>
      <Grid item xs={12} md={3}>
        <HomeFeature
          img={Trustless}
          alt="intelligent"
          title="Intelligent Auto-Compounding"
          subtitle="Auto-compound earnings to maximize underlying returns"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <HomeFeature
          img={Simple}
          alt="optimized"
          title="Gas Optimization"
          subtitle="Save on transaction fees by using optimized Smart Contracts"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <HomeFeature
          img={NonCustodial}
          alt="seamless"
          title="Seamless Fund Management"
          subtitle="Easily gain managed exposure to the most well-known DeFi protocols"
        />
      </Grid>
    </Grid>
  );
};
