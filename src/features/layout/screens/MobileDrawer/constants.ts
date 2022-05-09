import type { MobileMenuProps } from "./MobileDrawer";
import { noop } from "@workspace/utility";

export const DEFAULT_MOBILE_DRAWER_TEST_PROPS: MobileMenuProps = {
  onClose: noop,
  onOpen: noop,
  logo: {
    src: "https://via.placeholder.com/500",
    alt: "logo alt text, replace it",
  },
  menuItems: [
    { label: "Item 1", onClick: noop },
    { label: "Item 2", onClick: noop },
    { label: "Item 3", onClick: noop },
  ],
  open: false,
};

export const MOBILE_DRAWER_TEST_ID = {
  root: "mobile-drawer-root-test-id",
} as const;
