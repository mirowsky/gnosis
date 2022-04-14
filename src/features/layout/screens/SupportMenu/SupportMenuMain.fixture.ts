import type { SupportMenuMainProps } from "./SupportMenuMain";
import { DEFAULT_ContactDialButton_TESTING_PROPS } from "../../../shared/ContactDial/ContactDialButton/ContactDialButton.fixture";
import { DEFAULT_SupportMenu_TESTING_PROPS } from "../../components/SupportMenuContainer/SupportMenu.fixture";

export const DEFAULT_SupportMenuMain_TESTING_PROPS: SupportMenuMainProps = {
  ContactDialButtonProps: DEFAULT_ContactDialButton_TESTING_PROPS,
  SupportMenuProps: DEFAULT_SupportMenu_TESTING_PROPS,
  open: true,
};

export const SupportMenuMain_TEST_ID = {} as const;
