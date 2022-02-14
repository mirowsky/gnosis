import { TestimonialCardProps } from "./TestimonialCard";

export const DEFAULT_TESTIMONIAL_CARD_TESTING_PROPS: TestimonialCardProps = {
  testimonial:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non  enim praesent elementum facilisis leo.",
  testimonialExtra: "SP/São Paulo",
  testimonialName: "Paulo Lima",
  testimonialPicture: {
    src: "https://via.placeholder.com/1500",
    alt: "placeholder alt text, change me",
  },
};

export const TESTIMONIAL_CARD_TEST_ID = {} as const;
