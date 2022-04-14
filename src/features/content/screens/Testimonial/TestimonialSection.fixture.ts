import { DEFAULT_TESTIMONIAL_SLIDER_TESTING_PROPS } from "../../components/TestimonialSlider/constants";
import type { TestimonialSectionProps } from "./TestimonialSection";

export const DEFAULT_TestimonialSection_TESTING_PROPS: TestimonialSectionProps =
  {
    TestimonialSliderProps: {
      ...DEFAULT_TESTIMONIAL_SLIDER_TESTING_PROPS,
    },
    sectionTitle: "O que os nosso alunos dizem sobre o Instituto Gnosis",
  };

export const TestimonialSection_TEST_ID = {} as const;
