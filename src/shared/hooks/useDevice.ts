import { useMediaQuery } from "./useMediaQuery";

export const useDevice = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  const isTablet = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isDesktop = useMediaQuery("only screen and (min-width : 993px)");

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};
