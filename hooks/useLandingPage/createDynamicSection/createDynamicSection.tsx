import { DynamicSectionsProps } from "@workspace/components/layouts";
import {
  BlogCollectionType,
  FAQCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";
import { createBlogSection } from "./createBlogSection/createBlogSection";
import { createFAQSection } from "./createFAQSection/createFAQSection";
import { createTestimonialSection } from "./createTestimonialSection/createTestimonialSection";

export const createDynamicSection = (params: {
  blog: BlogCollectionType[];
  faq: FAQCollectionType[];
  testimonial: TestimonialCollectionType[];
  state: Record<number, boolean>;
  setState: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}): DynamicSectionsProps => {
  return {
    BlogSectionProps: createBlogSection(params.blog),
    FAQSectionProps: createFAQSection(
      params.faq,
      params.state,
      params.setState
    ),
    TestimonialSectionProps: createTestimonialSection(params.testimonial),
  };
};
