import {
  Chat,
  DocumentScanner,
  Facebook,
  Instagram,
  PunchClock,
  WhatsApp,
} from "@mui/icons-material";
import { DefenseCardProps } from "../DefenseCard/DefenseCard";
import { DefenseSectionProps } from "./DefenseSection";

const DEFENSE_CARD_TEST_BASE: DefenseCardProps[] = [
  {
    icon: Facebook,
    label: "Cursos reconhecidos pelo MEC",
  },
  {
    icon: Instagram,
    label: "Cursos 100% EAD",
  },
  {
    icon: PunchClock,
    label: "Cursos intensivos e extensivos",
  },
  {
    icon: WhatsApp,
    label: "Ambiente de aprendizado online",
  },
  {
    icon: DocumentScanner,
    label: "TCC opcional",
  },
  {
    icon: Chat,
    label: "Atendimento personalizado",
  },
];

export const DEFAULT_DEFENSE_SECTION_TEST_PROPS: DefenseSectionProps = {
  items: DEFENSE_CARD_TEST_BASE,
};

export const DEFENSE_SECTION_TEST_ID = {
  GRID_CONTAINER: "defense-card-section-grid-container-testid",
} as const;
