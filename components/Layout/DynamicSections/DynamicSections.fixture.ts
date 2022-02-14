import { DEFAULT_BLOG_SECTION_TESTING_PROPS } from "../Blog/Main/constants";
import { DEFAULT_FAQSection_TESTING_PROPS } from "../FAQ/Main/FAQSection.fixture";
import { DEFAULT_TestimonialSection_TESTING_PROPS } from "../Testimonial/Main/TestimonialSection.fixture";
import type { DynamicSectionsProps } from "./DynamicSections";

export const DEFAULT_DynamicSections_TESTING_PROPS: DynamicSectionsProps = {
  BlogSectionProps: DEFAULT_BLOG_SECTION_TESTING_PROPS,
  FAQSectionProps: DEFAULT_FAQSection_TESTING_PROPS,
  TestimonialSectionProps: DEFAULT_TestimonialSection_TESTING_PROPS,
};

export const DynamicSections_TEST_ID = {} as const;
