import { Display, Heading } from "@ohfinance/oh-ui";
import { HomeDisplay } from "./components/HomeDisplay";
import { HomeAbout } from "./components/HomeAbout/HomeAbout";
import { HomeFlywheel } from "./components/HomeFlywheel";
import { HomeStrategy } from "./components/HomeStrategy";

export const Home = () => {
  return (
    <Display pullTop pushBottom>
      <HomeDisplay />
      <HomeAbout />
      <HomeFlywheel />
      <HomeStrategy />

      {/* <Box my={16}> */}
      <Heading color="secondary" align="center">
        <b>Fight back with the future of money</b>
      </Heading>
      {/* </Box> */}
    </Display>
  );
};
