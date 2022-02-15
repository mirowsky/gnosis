import { Close, WhatsApp } from "@mui/icons-material";
import type { ContactDialButtonProps } from "./ContactDialButton";

export const DEFAULT_ContactDialButton_TESTING_PROPS: ContactDialButtonProps = {
  open: true,
  color: "primary",
  fontSize: { xs: "1rem" },
  iconClosed: WhatsApp,
  iconOpen: Close,
};

export const ContactDialButton_TEST_ID = {} as const;
