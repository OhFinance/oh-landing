import { Button, Grid } from "@material-ui/core";
import { DOCS_URL, MEDIUM_URL, PITCH_DECK_URL } from "@ohfinance/oh-ui";
import { HeaderLink } from "./HeaderLink";

export const DesktopMenu = () => {
  return (
    <Grid container alignItems="center" spacing={4}>
      <Grid item>
        <HeaderLink title="Blog" url={MEDIUM_URL} />
      </Grid>
      <Grid item>
        <HeaderLink title="Docs" url={DOCS_URL} />
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
          href={PITCH_DECK_URL}
        >
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
};
