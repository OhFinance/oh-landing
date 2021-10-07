import { ListItem, ListItemProps, ListItemText } from "@material-ui/core";
import { FC } from "react";

export interface MobileMenuItemProps extends ListItemProps {
  href: string;
}

export const MobileMenuItem: FC<MobileMenuItemProps> = ({ href, children }) => {
  return (
    <ListItem
      button
      component="a"
      rel="noopener noreferrer"
      divider
      href={href}
      target="_blank"
    >
      <ListItemText>{children}</ListItemText>
    </ListItem>
  );
};
