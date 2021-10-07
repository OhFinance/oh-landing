import { Grid, makeStyles, Toolbar } from "@material-ui/core";
import {
  DOCS_URL,
  Flex,
  MediumButton,
  MEDIUM_URL,
  TwitterButton,
} from "@ohfinance/oh-ui";
import OhLogo from "assets/img/oh-logo-dark.png";
import { useHistory } from "react-router";
import { useMobile } from "@ohfinance/oh-ui";
import { FooterLink } from "./component/FooterLink";

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: "pointer",
  },
  image: {
    height: 18,
    width: "auto",
    opacity: 0.55,
  },
}));

export const Footer = () => {
  const classes = useStyles();
  const history = useHistory();
  const mobile = useMobile();

  return (
    <Toolbar>
      <Grid container alignItems="center" justify="space-between" spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify={mobile ? "center" : "flex-start"}
          >
            <Grid item xs={12} md={2}>
              <Flex center>
                <img src={OhLogo} alt="oh-logo" className={classes.image} />
              </Flex>
            </Grid>

            <Grid item>
              <FooterLink href={MEDIUM_URL}>Blog</FooterLink>
            </Grid>
            <Grid item>
              <FooterLink onClick={() => history.push("/contact")}>
                Contact
              </FooterLink>
            </Grid>
            <Grid item>
              <FooterLink href={DOCS_URL}>Docs</FooterLink>
            </Grid>
            <Grid item>
              <FooterLink onClick={() => history.push("/")}>Home</FooterLink>
            </Grid>
            <Grid item>
              <FooterLink onClick={() => history.push("/terms")}>
                Terms
              </FooterLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Flex align="center" justify={mobile ? "center" : "flex-end"}>
            <TwitterButton />
            <MediumButton />
          </Flex>
        </Grid>
      </Grid>
    </Toolbar>
  );
};
