import { DEFAULT_BLOG_PREVIEW_CARDS_TEST_PROPS } from "../BlogPreviewCard/constants";
import { BlogSectionProps } from "./BlogSection";

export const DEFAULT_BLOG_SECTION_TESTING_PROPS: BlogSectionProps = {
  ButtonProps: {
    children: "Load more",
  },
  items: [
    DEFAULT_BLOG_PREVIEW_CARDS_TEST_PROPS,
    DEFAULT_BLOG_PREVIEW_CARDS_TEST_PROPS,
    DEFAULT_BLOG_PREVIEW_CARDS_TEST_PROPS,
    DEFAULT_BLOG_PREVIEW_CARDS_TEST_PROPS,
  ],
  sectionTitle: "Confira nossas últimas postagens",
};

export const BLOG_SECTION_TEST_ID = {} as const;
