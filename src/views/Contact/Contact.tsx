import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Flex, useVersion, useMobile } from "@ohfinance/oh-ui";
import { FaEnvelope, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import OhBrand from "assets/img/oh-title-color.png";
import { urls } from "urls";

export const Contact = () => {
  const mobile = useMobile();
  const version = useVersion();

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        <b>Contact Us</b>
      </Typography>
      <Flex center>
        <List>
          <ListItem>
            <ListItemIcon>
              <FaEnvelope fontSize={32} />
            </ListItemIcon>
            <ListItemText>
              <a href={urls.email}>hello@oh.finance</a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FaTwitter fontSize={32} />
            </ListItemIcon>
            <ListItemText>
              <a href={urls.twitter} target="_blank" rel="noopener noreferrer">
                @OhFinanceDefi
              </a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FaTelegramPlane fontSize={32} />
            </ListItemIcon>
            <ListItemText>
              <a href={urls.telegram} target="_blank" rel="noopener noreferrer">
                @OhFinance
              </a>
            </ListItemText>
          </ListItem>
        </List>
      </Flex>
      <Flex center my={4}>
        <img
          src={OhBrand}
          alt="oh-finance-brand"
          width={mobile ? "300px" : "500px"}
          height="auto"
        />
      </Flex>
      <Typography align="center" variant="body2">
        Site Version: v{version}
      </Typography>
    </Container>
  );
};
