import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import BlogSection, { BlogSectionProps } from "../Blog/Main/BlogSection";
import FAQSection, { FAQSectionProps } from "../FAQ/Main/FAQSection";
import TestimonialSection, {
  TestimonialSectionProps,
} from "../Testimonial/Main/TestimonialSection";

export type DynamicSectionsProps = {
  BlogSectionProps: BlogSectionProps;
  TestimonialSectionProps: TestimonialSectionProps;
  FAQSectionProps: FAQSectionProps;
};

export const DynamicSections = ({
  BlogSectionProps,
  FAQSectionProps,
  TestimonialSectionProps,
}: DynamicSectionsProps) => {
  return (
    <Box sx={styles.root}>
      <BlogSection {...BlogSectionProps} />

      <TestimonialSection {...TestimonialSectionProps} />

      <FAQSection {...FAQSectionProps} />
    </Box>
  );
};

export default DynamicSections;

const styles = stylesheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: "6rem" },
  },
});
