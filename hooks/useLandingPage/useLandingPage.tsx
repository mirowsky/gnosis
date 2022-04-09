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
} from "@workspace/types";

export const useLandingPage = (
  router: NextRouter,
  whatsAppHandler: ReturnType<typeof useWhatsAppRedirect>,
  dynamicCollections: {
    faq: Parameters<typeof createDynamicSection>[0]["FAQItems"];
    blog: BlogCollectionType[];
    testimonial: TestimonialCollectionType[];
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
      blogPosts: dynamicCollections.blog.map((val, index) => {
        return {
          img: {
            src: val.featuredImage.imageURL,
            alt: val.featuredImage.imageDescription,
          },
          readingTime: "10 minutos de leitura",
          tags: ["Medicina"],
          title: val.blogTitle,
        };
      }),
      testimonialItems: dynamicCollections.testimonial.map(
        (testimonial, _index) => {
          return {
            testimonial: testimonial.testimonialText,
            testimonialName: testimonial.testimonialName,
            testimonialPicture: {
              src: testimonial.testimonialPicture.imageURL,
              alt: testimonial.testimonialPicture.imageDescription,
            },
            testimonialExtra: testimonial.testimonialLocation,
          };
        }
      ),
    }),
    DefenseSectionProps: createDefenseSection(),
    HeroSectionProps: createHeroSection(router),
    AboutSectionProps: createAboutSection(),
  };
};
