import { useMobile } from "@ohfinance/oh-ui";
import OhBrand from "assets/img/oh-brand.png";

export const AppBrand = () => {
  const mobile = useMobile();

  return (
    <img
      src={OhBrand}
      alt="oh-finance-brand"
      width={mobile ? "250px" : "500px"}
      height="auto"
    />
  );
};
