import { Grid, makeStyles, Toolbar } from "@material-ui/core";
import {
  DOCS_URL,
  Flex,
  IconButton,
  MEDIUM_URL,
  OH_LOGO_DARK_URL,
  TWITTER_URL,
} from "@ohfinance/oh-ui";
import { useHistory } from "react-router";
import { useMobile } from "@ohfinance/oh-ui";
import { FooterLink } from "./component/FooterLink";
import { FaMediumM, FaTwitter } from "react-icons/fa";

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
    <Toolbar disableGutters>
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
                <img
                  src={OH_LOGO_DARK_URL}
                  alt="oh-logo"
                  className={classes.image}
                />
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
            <IconButton href={TWITTER_URL}>
              <FaTwitter size="32px" />
            </IconButton>
            <IconButton href={MEDIUM_URL}>
              <FaMediumM size="32px" />
            </IconButton>
          </Flex>
        </Grid>
      </Grid>
    </Toolbar>
  );
};
