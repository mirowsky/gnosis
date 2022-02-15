import { FileCopy } from "@mui/icons-material";
import type { ContactDialItemProps } from "./ContactDialItem";

export const DEFAULT_ContactDialItem_TESTING_PROPS: ContactDialItemProps = {
  icon: FileCopy,
  label: "Informações sobre cursos",
  action: () => {},
};

export const ContactDialItem_TEST_ID = {} as const;
