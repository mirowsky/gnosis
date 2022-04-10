import React from "react";
import { LandingPageProps } from "@workspace/components/pages";
import { NextRouter } from "next/router";
import { createAboutSection } from "./createAboutSection/createAboutSection";
import { createCourseSection } from "./createCourseSection/createCourseSection";
import { createDefenseSection } from "./createDefenseSection/createDefenseSection";
import { createDynamicSection } from "./createDynamicSection/createDynamicSection";
import { createHeroSection } from "./createHeroSection/createHeroSection";
import { useWhatsAppRedirect } from "@workspace/hooks";
import {
  BlogCollectionType,
  CourseCollectionType,
  TestimonialCollectionType,
  FAQCollectionType,
} from "@workspace/types";

const createFAQState = (items: FAQCollectionType[]) => {
  let result: Record<number, boolean> = {};

  items.forEach((_val, index) => {
    result[index] = false;
  });

  return result;
};

export const useLandingPage = (
  router: NextRouter,
  whatsAppHandler: ReturnType<typeof useWhatsAppRedirect>,
  collections: {
    faq: FAQCollectionType[];
    blog: BlogCollectionType[];
    testimonial: TestimonialCollectionType[];
    courses: CourseCollectionType[];
  }
): LandingPageProps => {
  const [activeTab, setActiveTab] = React.useState(0);

  const [FAQState, setFAQState] = React.useState(
    createFAQState(collections.faq)
  );

  return {
    CourseSectionProps: createCourseSection({
      router: router,
      activeTab: activeTab,
      setActiveTab: setActiveTab,
      whatsAppHandler: whatsAppHandler,
      courses: collections.courses,
    }),
    DynamicSectionsProps: createDynamicSection({
      faq: collections.faq,
      blog: collections.blog,
      testimonial: collections.testimonial,
      setState: setFAQState,
      state: FAQState,
    }),
    DefenseSectionProps: createDefenseSection(),
    HeroSectionProps: createHeroSection(router),
    AboutSectionProps: createAboutSection(),
  };
};
