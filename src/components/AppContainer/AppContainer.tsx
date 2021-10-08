import { Container, makeStyles } from "@material-ui/core";
import { Display } from "@ohfinance/oh-ui";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Particles } from "components/Particles";
import { FC } from "react";

const useStyles = makeStyles((theme) => ({
  display: {
    overflow: "hidden",
  },
}));

export const AppContainer: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container>
      <Particles />

      <Display className={classes.display}>
        <Header />
        {children}
        <Footer />
      </Display>
    </Container>
  );
};
