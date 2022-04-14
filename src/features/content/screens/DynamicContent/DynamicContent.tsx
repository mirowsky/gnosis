import { Box } from "@mui/material";
import {
  BlogCollectionType,
  FAQCollectionType,
  TestimonialCollectionType,
  ThemeStyles,
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
      <BlogProxy sx={{ py: 10, px: 2 }} items={blogPosts} />

      <TestimonialProxy
        sx={{ py: 10, bgcolor: (theme) => theme.palette.bg.primary }}
        items={testimonialItems.map((item, index) => {
          return {
            ...item,
            sx: {
              scale: "0.85",
            } as ThemeStyles,
          };
        })}
      />

      <Box sx={{ position: "relative" }}>
        <FAQProxy
          sx={{
            py: 10,
            px: 2,
          }}
          items={FAQItems}
        />

        <Box sx={{ ...(backgroundPattern() as {}) }} />
      </Box>
    </Box>
  );
};
