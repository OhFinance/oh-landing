import { Button, Grid } from "@material-ui/core";
import { NavLink } from "components/NavLink";
import { urls } from "urls";

export const DesktopMenu = () => {
  return (
    <Grid container alignItems="center" spacing={4}>
      {/* <Grid item>
        <NavLink title="About" path="/about" />
      </Grid> */}
      <Grid item>
        <NavLink title="Blog" url={urls.medium} />
      </Grid>
      <Grid item>
        <NavLink title="Docs" url={urls.docs} />
      </Grid>
      <Grid item>
        {/* <Button size="large" color="primary" variant="contained">
          Launch App
        </Button> */}
        <Button
          size="large"
          color="primary"
          variant="contained"
          target="_blank"
          href={urls.deck}
        >
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
};
