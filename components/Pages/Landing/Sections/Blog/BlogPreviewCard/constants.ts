import { BlogPreviewCardProps } from "./BlogPreviewCard";

export const DEFAULT_BLOG_PREVIEW_CARDS_TEST_PROPS: BlogPreviewCardProps = {
  img: {
    src: "https://via.placeholder.com/500",
    alt: "This is a placeholder, replace me",
  },
  readingTime: "10 min de leitura",
  tags: [],
  title: "Placeholder title",
};

export const BLOG_PREVIEW_CARD_TEST_ID = {} as const;
