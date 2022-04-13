import { TestimonialSectionProps } from "src/components/Layout";
import { TestimonialCollectionType } from "@workspace/types";

export const createTestimonialSection = (
  items: TestimonialCollectionType[]
): TestimonialSectionProps => {
  return {
    sectionTitle: "O que nossos alunos dizem sobre o Instituto Gnosis.",
    TestimonialSliderProps: {
      items: items.map((testimonial, _index) => {
        return {
          sx: { scale: "0.85" },
          testimonial: testimonial.testimonialText,
          testimonialName: testimonial.testimonialName,
          testimonialPicture: {
            src: testimonial.testimonialPicture.imageURL,
            alt: testimonial.testimonialPicture.imageDescription,
          },
          testimonialExtra: testimonial.testimonialLocation,
        };
      }),
    },
  };
};
