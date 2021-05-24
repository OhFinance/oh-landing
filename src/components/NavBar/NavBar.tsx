import {
  AppBar,
  Grid,
  makeStyles,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { NavLink } from "../NavLink";
import { MobileMenu } from "./components/MobileMenu";
import { DesktopMenu } from "./components/DesktopMenu";
import OhTitle from "assets/img/oh-title.png";
import { Flex } from "@ohfinance/oh-ui";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 24,
    width: "auto",
    // opacity: 0.55,
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Flex align="center">
              {mobile && <MobileMenu />}
              <NavLink path="/">
                <img src={OhTitle} alt="oh-logo" className={classes.image} />
              </NavLink>
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
