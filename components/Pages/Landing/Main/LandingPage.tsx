import React from "react";
import { HeroProps, Hero } from "../Sections/Hero/Main/Hero";
import {
  AboutSection,
  AboutSectionProps,
} from "../Sections/About/Main/AboutSection";
import {
  DefenseSectionProps,
  DefenseSection,
} from "../Sections/Defense/Main/DefenseSection";
import {
  CourseSectionProps,
  CourseSection,
} from "../Sections/Courses/Main/CoursesSection";
import {
  NewsLetterSectionProps,
  NewsLetterSection,
} from "../Sections/Newsletter/Main/NewsLetterSection";
import {
  BlogSectionProps,
  BlogSection,
} from "../Sections/Blog/Main/BlogSection";
import {
  TestimonialSection,
  TestimonialSectionProps,
} from "../Sections/Testimonial/Main/TestimonialSection";
import { FAQSection, FAQSectionProps } from "../Sections/FAQ/Main/FAQSection";
import {
  ContactSection,
  ContactSectionProps,
} from "../Sections/Contact/Main/ContactSection";

export type LandingPageProps = {};

export const LandingPage = (props: LandingPageProps) => {
  return <div>Hello, LandingPage!</div>;
};

export default LandingPage;
