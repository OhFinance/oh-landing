import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@ohfinance/oh-ui";
import { FC } from "react";

const Providers: FC = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </HelmetProvider>
  );
};

export default Providers;
