import type { SupportMenuProps, SupportMenuItemProps } from "./SupportMenu";
import { QuestionAnswer } from "@mui/icons-material";

const item: SupportMenuItemProps & { "test-id": string } = {
  icon: QuestionAnswer,
  subtitle: "Fale com nossa equipe comercial",
  title: "Equipe comercial",
  onClick: () => {},
  online: true,
  "test-id": "",
};

export const SupportMenu_TEST_ID = {
  closeButton: "supportMenuCloseButtonID",
  listItemOne: "supportMenuItemTestIdOne",
  listItemTwo: "supportMenuItemTestIdTwo",
  listItemThree: "supportMenuItemTestIdThree",
};

interface SupportMenuPropsWithId extends SupportMenuProps {
  items: Array<SupportMenuItemProps & { ["test-id"]: string }>;
}

export const DEFAULT_SupportMenu_TESTING_PROPS: SupportMenuPropsWithId = {
  open: true,
  headerTitle: "Precisa de ajuda? Fale conosco!",
  headerSubtitle: "Converse com nossa equipe via WhatsApp",
  onCloseButtonClick: () => {},
  onClose: () => {},
  items: [
    { ...item, "test-id": SupportMenu_TEST_ID.listItemOne },
    { ...item, "test-id": SupportMenu_TEST_ID.listItemTwo },
    { ...item, "test-id": SupportMenu_TEST_ID.listItemThree },
  ],
};
