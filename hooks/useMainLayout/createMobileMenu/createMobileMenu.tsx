import { MobileMenuProps } from "@workspace/components/layouts";

export const createMobileMenu = (params: {
  open: boolean;
  onClose: (...args: unknown[]) => void;
  onOpen: (...args: unknown[]) => void;
  items: MobileMenuProps["menuItems"];
}): MobileMenuProps => {
  return {
    menuItems: params.items?.map((val, _i) => {
      return {
        ...val,
        onClick: () => {
          val.onClick();
          params.onClose();
        },
      };
    }),
    open: params.open,
    onClose: params.onClose,
    onOpen: params.onOpen,
    logo: {
      src: "/images/logo.svg",
      alt: "Instituto Educacional Gnosis - Logotipo - A figura de uma coruja formado por polígonos",
    },
  };
};
