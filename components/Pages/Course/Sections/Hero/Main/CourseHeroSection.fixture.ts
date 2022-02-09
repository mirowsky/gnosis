import { WhatsApp } from "@mui/icons-material";
import type { CourseHeroSectionProps } from "./CourseHeroSection";

export const DEFAULT_CourseHeroSection_TESTING_PROPS: CourseHeroSectionProps = {
  chipLabel: "Pós-graduação",
  subtitle:
    "Lorem ipsum dolum sanet omeri principia machinae aethereum dolum caneris olaeve",
  title: "Alergia e imunologia",
  PrimaryButtonProps: {
    children: "Manifeste interesse",
  },
  SecondaryButtonProps: {
    children: WhatsApp({}),
  },
};

export const CourseHeroSection_TEST_ID = {} as const;
