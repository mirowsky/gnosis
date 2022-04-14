import { DEFAULT_TESTIMONIAL_CARD_TESTING_PROPS } from "../TestimonialCard/constants";
import { TestimonialSliderProps } from "./TestimonialSlider";

const card = DEFAULT_TESTIMONIAL_CARD_TESTING_PROPS;

export const DEFAULT_TESTIMONIAL_SLIDER_TESTING_PROPS: TestimonialSliderProps =
  {
    items: [card, card, card, card, card, card],
  };

export const TESTIMONIAL_SLIDER_TEST_ID = {} as const;
