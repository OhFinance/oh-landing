import { Flex } from "@ohfinance/oh-ui";
import { LandingParticles } from "./components/LandingParticles";
import { LandingSplash } from "./components/LandingSplash";

export const Landing = () => {
  return (
    <Flex column>
      <LandingParticles />
      <LandingSplash />
    </Flex>
  );
};
