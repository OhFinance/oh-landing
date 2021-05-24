import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { OhLightTheme } from "@ohfinance/oh-ui";
import { VersionProvider } from "@ohfinance/oh-ui";
import { version } from "../package.json";

const Providers: React.FC = ({ children }) => {
  return (
    <VersionProvider version={version}>
      <ThemeProvider theme={OhLightTheme}>{children}</ThemeProvider>
    </VersionProvider>
  );
};

export default Providers;
