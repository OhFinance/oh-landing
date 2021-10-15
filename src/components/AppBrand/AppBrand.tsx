import { OH_BRAND_URL, useMobile } from "@ohfinance/oh-ui";

export const AppBrand = () => {
  const mobile = useMobile();

  return (
    <img
      src={OH_BRAND_URL}
      alt="oh-finance-brand"
      width={mobile ? "250px" : "500px"}
      height="auto"
    />
  );
};
