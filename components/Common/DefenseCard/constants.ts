import { LockClock } from "@mui/icons-material";
import { DefenseCardProps } from "./DefenseCard";

export const DEFAULT_DEFENSE_CARD_TEST_PROPS: DefenseCardProps = {
  icon: LockClock,
  label: "Lorem ipsum dolum, defense card",
};

export const DEFENSE_CARD_TEST_ID = {
  ICON: "defense-card-icon-testid",
} as const;
