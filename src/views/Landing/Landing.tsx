import { Box, Typography } from "@material-ui/core";
import { Flex } from "@ohfinance/oh-ui";
import { About } from "views/About";
import { LandingParticles } from "./components/LandingParticles";
import { LandingSplash } from "./components/LandingSplash";

export const Landing = () => {
  return (
    <Flex column>
      <LandingParticles />
      <LandingSplash />
      <About />

      <Box my={16}>
        <Typography variant="h4" color="secondary" align="center" paragraph>
          <b>Fight back with the future of money</b>
        </Typography>
      </Box>
    </Flex>
  );
};
