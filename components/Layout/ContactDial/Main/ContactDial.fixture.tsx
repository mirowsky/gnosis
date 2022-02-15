import { DEFAULT_ContactDialButton_TESTING_PROPS } from "../ContactDialButton/ContactDialButton.fixture";
import { DEFAULT_ContactDialItem_TESTING_PROPS } from "../ContactDialItem/ContactDialItem.fixture";
import type { ContactDialProps } from "./ContactDial";

const item = DEFAULT_ContactDialItem_TESTING_PROPS;

export const DEFAULT_ContactDial_TESTING_PROPS: ContactDialProps = {
  items: [item, item, item, item, item],
  ContactDialButtonProps: DEFAULT_ContactDialButton_TESTING_PROPS,
};

export const ContactDial_TEST_ID = {} as const;
