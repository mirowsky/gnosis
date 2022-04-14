import { HeaderItem } from "../Header/Header";
import MobileMenu from "../MobileDrawer/MobileDrawer";

export type MobileDrawerProxyProps = {
  items: HeaderItem[];
  onOpen: (...args: unknown[]) => void;
  onClose: (...args: unknown[]) => void;
  open: boolean;
};

export const MobileDrawerProxy = ({
  items = [],
  onClose = () => {},
  onOpen = () => {},
  open = false,
}: MobileDrawerProxyProps) => {
  return (
    <MobileMenu
      {...{
        menuItems: items.map((item, index) => {
          return {
            label: item.label,
            onClick: item.onClick,
          };
        }),
        open: open,
        onClose: onClose,
        onOpen: onOpen,
        logo: {
          src: "/images/logo.svg",
          alt: "Instituto Educacional Gnosis - Logotipo - A figura de uma coruja formado por polígonos",
        },
      }}
    />
  );
};
