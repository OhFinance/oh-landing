import { makeStyles, Link } from "@material-ui/core";
import { Text } from "@ohfinance/oh-ui";
import { FC } from "react";

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: "pointer",
  },
}));

export interface FooterLinkProps {
  href?: string;
  onClick?: () => void;
}

export const FooterLink: FC<FooterLinkProps> = ({
  href,
  onClick,
  children,
}) => {
  const classes = useStyles();

  return (
    <Text>
      <Link
        className={classes.link}
        color="textPrimary"
        onClick={onClick}
        href={href}
        rel={href && "noopener noreferrer"}
        target={href && "_blank"}
      >
        {children}
      </Link>
    </Text>
  );
};
