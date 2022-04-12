import type { GetStaticProps, NextPage } from "next";
import { LandingPage } from "@workspace/components/pages";
import {
  BlogCollectionType,
  CourseCollectionType,
  FAQCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";
import { useRouter } from "next/router";
import {
  useDetectMobile,
  useLandingPage,
  useWhatsAppRedirect,
} from "@workspace/hooks";
import React from "react";
import { META_TAGS } from "@workspace/contants";
import Head from "next/head";
import {
  BlogService,
  FAQService,
  CoursesService,
  TestimonialService,
} from "@workspace/services";

export interface IndexPageProps {
  courses: CourseCollectionType[];
  blog?: BlogCollectionType[];
  testimonials?: TestimonialCollectionType[];
  faq?: FAQCollectionType[];
}

const Home: NextPage<IndexPageProps> = ({
  courses = [],
  blog = [],
  testimonials = [],
  faq = [],
}) => {
  const router = useRouter();
  const isMobile = useDetectMobile();
  const whatsRedirect = useWhatsAppRedirect(isMobile ? "mobile" : "desktop");

  const landingProps = useLandingPage(router, whatsRedirect, {
    blog: blog ?? [],
    faq: faq ?? [],
    testimonial: testimonials ?? [],
    courses: courses ?? [],
  });

  return (
    <React.Fragment>
      <Head>
        <meta property="og:title" content={META_TAGS.title} />
        <meta property="og:description" content={META_TAGS.description} />
        <meta name="description" content={META_TAGS.description} />
      </Head>
      <LandingPage {...landingProps} />
    </React.Fragment>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<IndexPageProps> = async ({
  params,
}) => {
  const courseData = await CoursesService.findAll();
  const blogData = await BlogService.findAll();
  const testimonialData = await TestimonialService.findAll();
  const faqData = await FAQService.findAll();

  return {
    props: {
      courses: courseData,
      testimonials: testimonialData,
      blog: blogData,
      faq: faqData,
    },
  };
};
