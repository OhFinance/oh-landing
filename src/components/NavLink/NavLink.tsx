import { Box, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

interface NavLinkProps {
  title?: string;
  url?: string;
  path?: string;
}

const useStyles = makeStyles((theme) => ({
  hover: {
    cursor: "pointer",
  },
  active: {
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.text.secondary,
    },
    textDecoration: "underline",
    textDecorationColor: theme.palette.primary.main,
    textDecorationThickness: 4,
    textUnderlinePosition: "under",
  },
  link: {
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.text.secondary,
    },
  },
}));

export const NavLink: React.FC<NavLinkProps> = ({
  path,
  title,
  url,
  children,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === path) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location.pathname, path, setActive]);

  const handleUrl = () => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <Box className={classes.hover}>
      {children && path && (
        <Box onClick={() => history.push(path)}>{children}</Box>
      )}
      {title && path && (
        <Typography
          className={active ? classes.active : classes.link}
          onClick={() => history.push(path)}
        >
          <b>{title}</b>
        </Typography>
      )}
      {title && url && (
        <Typography
          className={active ? classes.active : classes.link}
          onClick={() => handleUrl()}
        >
          <b>{title}</b>
        </Typography>
      )}
    </Box>
  );
};
