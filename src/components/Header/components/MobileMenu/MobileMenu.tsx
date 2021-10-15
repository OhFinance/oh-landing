import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import {
  DOCS_URL,
  Flex,
  IconButton,
  MEDIUM_URL,
  OH_LOGO_URL,
  PITCH_DECK_URL,
  TWITTER_URL,
} from "@ohfinance/oh-ui";
import { Fragment, useState } from "react";
import { FaMediumM, FaTwitter } from "react-icons/fa";
import { MobileMenuItem } from "./components/MobileMenuItem";
import MenuIcon from "@material-ui/icons/Menu";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Flex column justify="space-between" grow>
          <Box p={2}>
            <Flex center>
              <img
                src={OH_LOGO_URL}
                alt="oh-finance-logo"
                width={64}
                height="auto"
              />
            </Flex>
            <List>
              <MobileMenuItem href={MEDIUM_URL}>Blog</MobileMenuItem>
              <MobileMenuItem href={DOCS_URL}>Docs</MobileMenuItem>
            </List>
            <Button
              variant="contained"
              color="primary"
              size="large"
              target="_blank"
              href={PITCH_DECK_URL}
            >
              Learn More
            </Button>
          </Box>
          <Box>
            <Flex center>
              <IconButton href={TWITTER_URL}>
                <FaTwitter size="32px" />
              </IconButton>
              <IconButton href={MEDIUM_URL}>
                <FaMediumM size="32px" />
              </IconButton>
            </Flex>
          </Box>
        </Flex>
      </Drawer>
    </Fragment>
  );
};
