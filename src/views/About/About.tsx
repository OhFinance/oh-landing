import { Box, Container } from "@material-ui/core";
import { Flex } from "@ohfinance/oh-ui";
import { AboutFeatureRow } from "./components/AboutFeatureRow";
import { AboutFlywheelRow } from "./components/AboutFlywheelRow";
import { AboutSplash } from "./components/AboutSplash";
import { AboutStrategyRow } from "./components/AboutStrategyRow";

export const About = () => {
  return (
    // <Flex column>
    <Container>
      <Box mt={16}>
        <AboutSplash />
      </Box>

      <Box mt={8}>
        <AboutFeatureRow />
      </Box>

      <Box mt={16}>
        <AboutStrategyRow />
      </Box>

      <Box mt={16}>
        <AboutFlywheelRow />
      </Box>
    </Container>
    // </Flex>
  );
};
