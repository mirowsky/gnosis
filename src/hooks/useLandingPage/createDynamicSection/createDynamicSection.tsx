import { DynamicSectionsProps } from "@workspace/components/shared";
import {
  BlogCollectionType,
  FAQCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";
import { NextRouter } from "next/router";
import { createBlogSection } from "./createBlogSection/createBlogSection";
import { createFAQSection } from "./createFAQSection/createFAQSection";
import { createTestimonialSection } from "./createTestimonialSection/createTestimonialSection";

export const createDynamicSection = (params: {
  blog: BlogCollectionType[];
  faq: FAQCollectionType[];
  testimonial: TestimonialCollectionType[];
  state: Record<number, boolean>;
  setState: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  router: NextRouter;
}): DynamicSectionsProps => {
  return {
    BlogSectionProps: createBlogSection(params.blog, params.router),
    FAQSectionProps: createFAQSection(
      params.faq,
      params.state,
      params.setState
    ),
    TestimonialSectionProps: createTestimonialSection(params.testimonial),
  };
};
