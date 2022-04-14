import { QuestionAnswer } from "@mui/icons-material";
import type { SupportMenuItemProps } from "./SupportMenuItem";

export const DEFAULT_SupportMenuItem_TESTING_PROPS: SupportMenuItemProps = {
  icon: QuestionAnswer,
  subtitle: "Fale com nossa equipe comercial",
  title: "Equipe comercial",
  onClick: () => {},
  online: true,
};

export const SupportMenuItem_TEST_ID = {
  tag: "SUPPORT_MENU_ITEM_STATUS_TAG_ID",
} as const;
