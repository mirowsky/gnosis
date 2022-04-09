import type { GetStaticProps, NextPage } from "next";
import { LandingPage } from "@workspace/components/pages";
import {
  BlogCollectionType,
  CourseCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import {
  useDetectMobile,
  useLandingPage,
  useWhatsAppRedirect,
} from "@workspace/hooks";
import React from "react";
import { COLLECTIONS, META_TAGS } from "@workspace/contants";
import Head from "next/head";

export interface IndexPageProps {
  courses: CourseCollectionType[];
  blog?: BlogCollectionType[];
  testimonials?: TestimonialCollectionType[];
}

const Home: NextPage<IndexPageProps> = ({ courses, blog, testimonials }) => {
  const router = useRouter();
  const isMobile = useDetectMobile();
  const whatsRedirect = useWhatsAppRedirect(isMobile ? "mobile" : "desktop");

  const landingProps = useLandingPage(
    router,
    whatsRedirect,
    {
      blog: blog ?? [],
      faq: [] ?? [],
      testimonial: testimonials ?? [],
    },
    courses
  );

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
  const courseRequest: AxiosResponse<CourseCollectionType[]> = await axios.get(
    COLLECTIONS.courses
  );
  const blogRequest: AxiosResponse<BlogCollectionType[]> = await axios.get(
    COLLECTIONS.blog
  );
  const testimonialRequest: AxiosResponse<TestimonialCollectionType[]> =
    await axios.get(COLLECTIONS.testimonials);

  const courseData = courseRequest.data;
  const blogData = blogRequest.data;
  const testimonialData = testimonialRequest.data;

  return {
    props: {
      courses: courseData,
      testimonials: testimonialData,
      blog: blogData,
    },
  };
};
