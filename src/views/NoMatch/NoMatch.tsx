import { Button, Typography } from "@material-ui/core";
import { Display } from "@ohfinance/oh-ui";
import { FaHome } from "react-icons/fa";
import { useHistory } from "react-router";

export const NoMatch = () => {
  const history = useHistory();

  return (
    <Display center column>
      <Typography align="center" variant="h4" gutterBottom>
        Page Not Found
      </Typography>

      <Button
        variant="contained"
        startIcon={<FaHome />}
        onClick={() => history.push("/")}
      >
        Return Home
      </Button>
    </Display>
  );
};
