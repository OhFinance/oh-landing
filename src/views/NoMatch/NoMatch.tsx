import { Button, Typography } from "@material-ui/core";
import { Display, Flex, Heading } from "@ohfinance/oh-ui";
import { AppBrand } from "components/AppBrand";
import { FaHome } from "react-icons/fa";
import { useHistory } from "react-router";

export const NoMatch = () => {
  const history = useHistory();

  return (
    <Flex center column grow>
      <Flex my={2}>
        <AppBrand />
      </Flex>

      <Heading align="center">Page Not Found</Heading>

      <Button
        variant="contained"
        startIcon={<FaHome />}
        onClick={() => history.push("/")}
      >
        Return Home
      </Button>
    </Flex>
  );
};
