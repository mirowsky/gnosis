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
import { COLLECTIONS_API_ROUTES, META_TAGS } from "@workspace/contants";
import Head from "next/head";
import { httpGet } from "@workspace/utility";

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
  const courseData = await httpGet<CourseCollectionType[]>(
    COLLECTIONS_API_ROUTES.courses
  );
  const blogData = await httpGet<BlogCollectionType[]>(
    COLLECTIONS_API_ROUTES.blog
  );

  const testimonialData = await httpGet<TestimonialCollectionType[]>(
    COLLECTIONS_API_ROUTES.testimonials
  );

  const faqData = await httpGet<FAQCollectionType[]>(
    COLLECTIONS_API_ROUTES.faq
  );

  return {
    props: {
      courses: courseData,
      testimonials: testimonialData,
      blog: blogData,
      faq: faqData,
    },
  };
};
