import { Button, Typography } from "@material-ui/core";
import { Display } from "@ohfinance/oh-ui";
import { useCallback } from "react";
import { FaBackward, FaHome } from "react-icons/fa";
import { useHistory } from "react-router";

export const NoMatch = () => {
  const history = useHistory();

  const handleBack = useCallback(() => {
    if (history.length > 0) {
      history.goBack();
    } else {
    }
  }, [history]);

  return (
    <Display center column>
      <Typography align="center" variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      {/* <Typography align="center" variant="body1"></Typography> */}
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
