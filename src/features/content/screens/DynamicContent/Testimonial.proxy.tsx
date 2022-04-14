import { TestimonialCollectionType } from "@workspace/types";
import { TestimonialSection } from "../Testimonial/TestimonialSection";

export type TestimonialProxyProps = {
  items: TestimonialCollectionType[];
};

export const TestimonialProxy = ({ items = [] }: TestimonialProxyProps) => {
  return (
    <TestimonialSection
      sectionTitle="O que nossos alunos dizem sobre nós"
      TestimonialSliderProps={{
        items: items.map((testimonial, _index) => {
          return {
            testimonial: testimonial.testimonialText,
            testimonialExtra: testimonial.testimonialLocation,
            testimonialName: testimonial.testimonialName,
            testimonialPicture: {
              alt: testimonial.testimonialPicture.imageDescription,
              src: testimonial.testimonialPicture.imageURL,
            },
          };
        }),
      }}
    />
  );
};
