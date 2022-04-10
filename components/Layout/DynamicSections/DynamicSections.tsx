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
      <BlogSection
        {...BlogSectionProps}
        sx={{ py: (theme) => ({ xs: theme.spacing(10) }) }}
      />

      <TestimonialSection
        {...TestimonialSectionProps}
        sx={{
          py: (theme) => ({ xs: theme.spacing(10) }),
          bgcolor: (theme) => theme.palette.bg.primary,
        }}
      />

      <Box sx={{ position: "relative" }}>
        <FAQSection
          {...FAQSectionProps}
          sx={{ py: (theme) => ({ xs: theme.spacing(10) }) }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#F6F9FB",
            top: 0,
            left: 0,
            opacity: 0.05,
            zIndex: -1,
            backgroundImage:
              "linear-gradient(#002946 1.6px, transparent 1.6px), linear-gradient(90deg, #002946 1.6px, transparent 1.6px), linear-gradient(#002946 0.8px, transparent 0.8px), linear-gradient(90deg, #002946 0.8px, #F6F9FB 0.8px)",
            backgroundSize: "40px 40px, 40px 40px, 8px 8px, 8px 8px",
            backgroundPosition:
              "-1.6px -1.6px, -1.6px -1.6px, -0.8px -0.8px, -0.8px -0.8px",
          }}
        />
      </Box>
    </Box>
  );
};

export default DynamicSections;

const styles = stylesheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});
