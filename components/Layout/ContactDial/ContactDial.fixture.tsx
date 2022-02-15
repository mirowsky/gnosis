import type { ContactDialItem, ContactDialProps } from "./ContactDial";
import { FileCopy, Save, Print, Share } from "@mui/icons-material";

const actions: ContactDialItem[] = [
  { icon: FileCopy, label: "Informações sobre cursos", action: () => {} },
  { icon: Save, label: "Dúvidas sobre valores", action: () => {} },
  {
    icon: Print,
    label: "Informações sobre pré-requisitos para cada curso",
    action: () => {},
  },
  { icon: Share, label: "Share", action: () => {} },
];

export const DEFAULT_ContactDial_TESTING_PROPS: ContactDialProps = {
  actions: actions,
  handleClose: () => {},
  handleOpen: () => {},
  open: true,
};

export const ContactDial_TEST_ID = {} as const;
