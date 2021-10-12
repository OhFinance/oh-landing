import { Box, Button, Container, Grid } from "@material-ui/core";
import {
  Display,
  Flex,
  IconButton,
  MEDIUM_URL,
  PITCH_DECK_URL,
  Subtitle,
  Title,
  TWITTER_URL,
} from "@ohfinance/oh-ui";
import { AppBrand } from "components/AppBrand";
import { FaMediumM, FaTwitter } from "react-icons/fa";

export const HomeDisplay = () => {
  return (
    <Display center>
      <Container maxWidth="md">
        <Flex center my={2}>
          <AppBrand />
        </Flex>
        <Title align="center">
          <b>
            Do{" "}
            <Box component="span" color="secondary.main">
              More
            </Box>{" "}
            with your DeFi Dollar
          </b>
        </Title>
        <Subtitle align="center">
          Oh! Finance is an optimized yield-generation protocol, focused on
          reducing risk and increasing volume exposure. Start earning{" "}
          <Box component="span" color="secondary.main">
            <b>industry-leading interest rates</b>
          </Box>{" "}
          on stablecoins in just a few clicks.
        </Subtitle>
        <Box mb={2}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="large"
                target="_blank"
                href={PITCH_DECK_URL}
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={2} justify="center">
          <Grid item>
            <IconButton href={TWITTER_URL}>
              <FaTwitter size="32px" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href={MEDIUM_URL}>
              <FaMediumM size="32px" />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Display>
  );
};
