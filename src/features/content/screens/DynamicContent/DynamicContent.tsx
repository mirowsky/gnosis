import { Box } from "@mui/material";
import {
  BlogCollectionType,
  FAQCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";
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
      <TestimonialProxy items={testimonialItems} />
      <BlogProxy items={blogPosts} />
      <FAQProxy items={FAQItems} />
    </Box>
  );
};
