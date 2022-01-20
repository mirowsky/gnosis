import { noop } from "@workspace/utility";
import { HeaderProps } from "./Header";

export const TEST_ID = {
  ITEM_CONTAINER: "header-item-container",
  CALL_TO_ACTION: "header-call-to-action",
} as const;

export const DEFAULT_TESTING_PROPS: HeaderProps = {
  logo: {
    src: "https://via.placeholder.com/1500",
    alt: "Logo alt text",
    label: "Logo label",
  },
  cta: {
    label: "CTA Click",
    onClick: noop,
  },
  items: [
    { label: "Button 1", onClick: noop },
    { label: "Button2", onClick: noop },
    { label: "Button 3", onClick: noop },
  ],
};
