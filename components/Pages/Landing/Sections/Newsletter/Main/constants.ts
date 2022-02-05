import { NewsLetterSectionProps } from "./NewsLetterSection";
import { noop } from "@workspace/utility";
import img from "@workspace/images/newsletter-doc.webp";

export const DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS: NewsLetterSectionProps =
  {
    img: {
      alt: "this is a placeholder, change me",
      src: img as unknown as string,
    },
    InputWithButtonProps: {},
  };

export const NEWSLETTER_SECTION_TEST_ID = {} as const;
