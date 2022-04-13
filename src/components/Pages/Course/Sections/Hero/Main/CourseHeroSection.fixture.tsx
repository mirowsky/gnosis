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
    children: <WhatsApp />,
  },
  img: {
    src: "https://source.unsplash.com/random",
    alt: "Placeholder alt text, change me",
  },
};

export const CourseHeroSection_TEST_ID = {} as const;
