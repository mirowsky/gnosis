import { Box } from "@mui/material";
import {
  BlogCollectionType,
  FAQCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";
import { backgroundPattern } from "@workspace/utility";
import { BlogProxy } from "./Blog.proxy";
import { FAQProxy } from "./FAQ.proxy";
import { TestimonialProxy } from "./Testimonial.proxy";

export type DynamicContentProps = {
  blogPosts: BlogCollectionType[];
  FAQItems: FAQCollectionType[];
  testimonialItems: TestimonialCollectionType[];
};

export const DynamicContent = ({
  FAQItems,
  blogPosts,
  testimonialItems,
}: DynamicContentProps) => {
  return (
    <Box>
      <BlogProxy sx={{ py: 10 }} items={blogPosts} />

      <TestimonialProxy sx={{ py: 10 }} items={testimonialItems} />

      <Box sx={{ position: "relative" }}>
        <FAQProxy items={FAQItems} />

        <Box sx={{ ...(backgroundPattern() as {}) }} />
      </Box>
    </Box>
  );
};
