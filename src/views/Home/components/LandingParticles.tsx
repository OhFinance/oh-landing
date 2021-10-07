import "assets/css/particles.css";
import Particles from "react-tsparticles";
import particlesOptions from "assets/json/particles.json";
import { ISourceOptions } from "tsparticles";

export const LandingParticles = () => {
  return <Particles options={particlesOptions as ISourceOptions} />;
};
