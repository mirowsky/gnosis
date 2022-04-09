import type { SupportMenuProps } from "./SupportMenu";
import { QuestionAnswer } from "@mui/icons-material";
import type { SupportMenuItemProps } from "../SupportMenuItem/SupportMenuItem";

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
  contentList: "supportMenuContentContainerTestId",
};

interface SupportMenuPropsWithId extends SupportMenuProps {
  items: Array<SupportMenuItemProps & { ["test-id"]: string }>;
}

export const DEFAULT_SupportMenu_TESTING_PROPS: SupportMenuPropsWithId = {
  headerTitle: "Precisa de ajuda? Fale conosco!",
  headerSubtitle: "Converse com nossa equipe via WhatsApp",
  onClick: () => {},
  items: [item, item, item, item, item],
};
