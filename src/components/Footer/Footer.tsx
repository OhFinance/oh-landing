import {
  Grid,
  Link,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Flex } from "@ohfinance/oh-ui";
import { TelegramButton, TwitterButton } from "components/MediaButtons";
import OhLogo from "assets/img/oh-logo-dark.png";
import { useHistory } from "react-router";
import { urls } from "urls";
import { useMobile } from "@ohfinance/oh-ui";

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
              <Typography>
                <Link
                  className={classes.link}
                  color="textPrimary"
                  onClick={() => history.push("/about")}
                >
                  About
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <Link
                  className={classes.link}
                  color="textPrimary"
                  href={urls.medium}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Blog
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <Link
                  className={classes.link}
                  color="textPrimary"
                  onClick={() => history.push("/contact")}
                >
                  Contact
                </Link>
              </Typography>
            </Grid>

            {/* <Grid item>
              <Typography>
                <Link
                  className={classes.link}
                  color="textPrimary"
                  href={urls.docs}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Documentation
                </Link>
              </Typography>
            </Grid> */}
            <Grid item>
              <Typography>
                <Link
                  className={classes.link}
                  color="textPrimary"
                  onClick={() => history.push("/")}
                >
                  Home
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <Link
                  className={classes.link}
                  color="textPrimary"
                  onClick={() => history.push("/terms")}
                >
                  Terms
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Flex align="center" justify={mobile ? "center" : "flex-end"}>
            <TwitterButton />
            <TelegramButton />

            {/* <DiscordButton /> */}
          </Flex>
        </Grid>
      </Grid>
    </Toolbar>
  );
};
