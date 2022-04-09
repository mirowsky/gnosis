import React from "react";
import { LandingPageProps } from "@workspace/components/pages";
import { NextRouter } from "next/router";
import { createAboutSection } from "./createAboutSection/createAboutSection";
import { createCourseSection } from "./createCourseSection/createCourseSection";
import { createDefenseSection } from "./createDefenseSection/createDefenseSection";
import { createDynamicSection } from "./createDynamicSection/createDynamicSection";
import { createHeroSection } from "./createHeroSection/createHeroSection";
import { useWhatsAppRedirect } from "@workspace/hooks";
import { CourseCollectionType } from "@workspace/types";

export const useLandingPage = (
  router: NextRouter,
  whatsAppHandler: ReturnType<typeof useWhatsAppRedirect>,
  dynamicCollections: {
    faq: Parameters<typeof createDynamicSection>[0]["FAQItems"];
    blog: Parameters<typeof createDynamicSection>[0]["blogPosts"];
    testimonial: Parameters<typeof createDynamicSection>[0]["testimonialItems"];
  },
  courses: CourseCollectionType[]
): LandingPageProps => {
  const [activeTab, setActiveTab] = React.useState(0);

  return {
    CourseSectionProps: createCourseSection({
      router: router,
      activeTab: activeTab,
      setActiveTab: setActiveTab,
      whatsAppHandler: whatsAppHandler,
      courses: courses,
    }),
    DynamicSectionsProps: createDynamicSection({
      FAQItems: dynamicCollections.faq,
      blogPosts: dynamicCollections.blog,
      testimonialItems: dynamicCollections.testimonial,
    }),
    DefenseSectionProps: createDefenseSection(),
    HeroSectionProps: createHeroSection(router),
    AboutSectionProps: createAboutSection(),
  };
};
