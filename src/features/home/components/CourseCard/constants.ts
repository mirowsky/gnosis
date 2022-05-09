import { Alarm, School, WhatsApp } from "@mui/icons-material";
import { noop } from "@workspace/utility";
import { CourseCardProps } from "./CourseCard";

export const DEFAULT_COURSE_CARD_TEST_PROPS: CourseCardProps = {
  primaryAction: {
    children: "Saiba mais",
    onClick: noop,
  },
  secondaryAction: {
    children: WhatsApp,
    onClick: noop,
  },
  tags: [
    { icon: Alarm, label: "24 meses" },
    { icon: School, label: "Pós-graduação" },
  ],
  title: "Geriatria e Gerontologia",
  img: {
    src: "https://via.placeholder.com/1500",
    alt: "DEFAULT ALT TEXT, CHANGE ME",
  },
};

export const COURSE_CARD_TEST_ID = {
  BUTTON_CONTAINER: "course-card-button-container-testid",
  TAG_CONTAINER: "course-card-tag-container-test-id",
} as const;
