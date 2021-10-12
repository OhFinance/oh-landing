import {
  AppBar,
  Grid,
  makeStyles,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { DesktopMenu } from "./components/DesktopMenu";
import OhTitle from "assets/img/oh-title.png";
import { Flex } from "@ohfinance/oh-ui";
import { HeaderLink } from "./components/HeaderLink";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 24,
    width: "auto",
    // opacity: 0.55,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Toolbar disableGutters>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Flex align="center">
              {mobile && <MobileMenu />}
              <HeaderLink path="/">
                <img src={OhTitle} alt="oh-logo" className={classes.image} />
              </HeaderLink>
            </Flex>
          </Grid>
          {!mobile && (
            <Grid item>
              <DesktopMenu />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
