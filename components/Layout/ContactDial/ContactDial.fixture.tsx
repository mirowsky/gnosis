import type { ContactDialItem, ContactDialProps } from "./ContactDial";
import { FileCopy, Save, Print, Share } from "@mui/icons-material";

const actions: ContactDialItem[] = [
  { icon: FileCopy, label: "Copy", action: () => {} },
  { icon: Save, label: "Save", action: () => {} },
  { icon: Print, label: "Print", action: () => {} },
  { icon: Share, label: "Share", action: () => {} },
];

export const DEFAULT_ContactDial_TESTING_PROPS: ContactDialProps = {
  actions: actions,
  handleClose: () => {},
  handleOpen: () => {},
  open: true,
};

export const ContactDial_TEST_ID = {} as const;
