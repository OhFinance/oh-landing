import { Grid } from "@material-ui/core";
import Simple from "assets/img/simple.png";
import Trustless from "assets/img/trustless.png";
import NonCustodial from "assets/img/non-custodial.png";
import { AboutFeature } from "./AboutFeature";

export const AboutFeatureRow = () => {
  return (
    <Grid container alignItems="center" justify="center" spacing={2}>
      <Grid item xs={12} md={3}>
        <AboutFeature
          img={Trustless}
          alt="intelligent"
          title="Intelligent Auto-Compounding"
          subtitle="Auto-compound earnings to maximize underlying returns"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <AboutFeature
          img={Simple}
          alt="optimized"
          title="Gas Optimization"
          subtitle="Save on transaction fees by using optimized Smart Contracts"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <AboutFeature
          img={NonCustodial}
          alt="seamless"
          title="Seamless Fund Management"
          subtitle="Easily gain managed exposure to the most well-known DeFi protocols"
        />
      </Grid>
    </Grid>
  );
};
