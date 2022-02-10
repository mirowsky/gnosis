import { DEFAULT_SyllabusItem_TESTING_PROPS } from "../SyllabusItem/SyllabusItem.fixture";
import type { SyllabusSectionProps } from "./SyllabusSection";

const syllabus_item = DEFAULT_SyllabusItem_TESTING_PROPS;

export const DEFAULT_SyllabusSection_TESTING_PROPS: SyllabusSectionProps = {
  activeIndex: 0,
  handleChange: () => {},
  syllabusItems: [
    syllabus_item,
    syllabus_item,
    syllabus_item,
    syllabus_item,
    syllabus_item,
    syllabus_item,
    syllabus_item,
  ],
  prerequisites: "Diploma de medicina válido em território brasileiro",
  courseType: "À partir de 600 horas",
  emec: {
    img: {
      alt: "alt text, change me",
      src: "https://via.placeholder.com/1500",
    },
    url: {
      href: "https://via.placeholder",
      label: "E-MEC link",
    },
  },
};

export const SyllabusSection_TEST_ID = {} as const;
