import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Flex } from "@ohfinance/oh-ui";
import { useCallback, useState } from "react";
import { FaBars } from "react-icons/fa";
import OhLogo from "assets/img/oh-logo-color.png";
import { useHistory } from "react-router";
import { urls } from "urls";
import { TelegramButton, TwitterButton } from "components/MediaButtons";

export const MobileMenu = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(
    (path: string) => {
      history.push(path);
      setOpen(false);
    },
    [history, setOpen]
  );

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <FaBars />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Flex column justify="space-between" grow>
          <Box p={2}>
            <Flex center>
              <img
                src={OhLogo}
                alt="oh-finance-logo"
                width={64}
                height="auto"
              />
            </Flex>
            <List>
              {/* <ListItem button divider onClick={() => handleClick("/about")}>
                <ListItemText>About</ListItemText>
              </ListItem> */}

              <ListItem
                button
                component="a"
                rel="noopener noreferrer"
                divider
                href={urls.medium}
                target="_blank"
              >
                <ListItemText>Blog</ListItemText>
              </ListItem>
              <ListItem
                button
                component="a"
                rel="noopener noreferrer"
                divider
                href={urls.docs}
                target="_blank"
              >
                <ListItemText>Docs</ListItemText>
              </ListItem>
            </List>
            <Button
              variant="contained"
              color="primary"
              size="large"
              target="_blank"
              href={urls.deck}
            >
              Learn More
            </Button>
          </Box>
          <Box>
            <Flex center>
              <TwitterButton />
              <TelegramButton />
            </Flex>
          </Box>
        </Flex>
      </Drawer>
    </div>
  );
};
