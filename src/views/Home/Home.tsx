import { Box, Typography } from "@material-ui/core";
import { Flex, Subheading } from "@ohfinance/oh-ui";
import { HomeDisplay } from "./components/HomeDisplay";
import { HomeAbout } from "./components/HomeAbout/HomeAbout";
import { HomeFlywheel } from "./components/HomeFlywheel";
import { HomeStrategy } from "./components/HomeStrategy";
import { Fragment } from "react";

export const Home = () => {
  return (
    <Fragment>
      {/* <LandingParticles /> */}
      <HomeDisplay />
      <HomeAbout />
      <HomeFlywheel />
      <HomeStrategy />

      <Box my={16}>
        <Subheading color="secondary" align="center">
          <b>Fight back with the future of money</b>
        </Subheading>
      </Box>
    </Fragment>
  );
};
