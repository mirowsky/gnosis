import { FireExtinguisher, School, WhatsApp } from "@mui/icons-material";
import { noop } from "src/utility";
import { CourseCardProps } from "../CourseCard/CourseCard";
import { CourseSliderProps } from "./CourseSlider";

const COURSE_SLIDER_ITEM: CourseCardProps = {
  img: {
    alt: "alt text, change me",
    src: "https://via.placeholder.com/1500",
  },
  primaryAction: {
    children: "View more",
    onClick: noop,
  },
  secondaryAction: {
    children: WhatsApp,
    onClick: noop,
  },
  tags: [
    { icon: School, label: "Castle walls" },
    { icon: FireExtinguisher, label: "Burn it up" },
  ],
  title: "Alergia e imunologia",
};

export const DEFAULT_COURSE_SLIDER_TEST_PROPS: CourseSliderProps = {
  items: [
    COURSE_SLIDER_ITEM,
    { ...COURSE_SLIDER_ITEM, title: "Sexologia" },
    { ...COURSE_SLIDER_ITEM, title: "Endocrinologia" },
    { ...COURSE_SLIDER_ITEM, title: "Psiquiatria" },
    { ...COURSE_SLIDER_ITEM, title: "Dermatologia" },
    { ...COURSE_SLIDER_ITEM, title: "Psicologia" },
    { ...COURSE_SLIDER_ITEM, title: "Pediatria" },
  ],
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
};

export const COURSE_SLIDER_TEST_ID = {
  CONTAINER: "course-slider-container-testid",
  NEXT_BUTTON: "course-slider-next-button-testid",
  PREV_BUTTON: "course-slider-prev-button-testid",
} as const;
