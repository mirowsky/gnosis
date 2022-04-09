import type { GetStaticProps, NextPage } from "next";
import { LandingPage, LandingPageProps } from "@workspace/components/pages";
import {
  AccessTime,
  AssuredWorkloadTwoTone,
  CastForEducation,
  HistoryEdu,
  School,
  SupportAgent,
  WhatsApp,
} from "@mui/icons-material";
import {
  getCourseURL,
  handleMenuClick,
  getThumbnail,
} from "@workspace/utility";
import {
  BlogCollectionType,
  CourseCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useDetectMobile, useWhatsAppRedirect } from "@workspace/hooks";
import React from "react";
import {
  COLLECTIONS,
  META_TAGS,
  WHATSAPP_PHONE_NUMBER,
} from "@workspace/contants";
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
  const [activeTab, setActiveTab] = React.useState(0);

  const courseSectionProps: LandingPageProps["CourseSectionProps"] = {
    CourseSliderProps: {
      items: courses.map((course, index) => {
        return {
          loading: true,
          primaryAction: {
            children: "Saiba mais",
            onClick: () => {
              router.push(
                getCourseURL(
                  course.courseArea,
                  course.courseLevel,
                  course.courseName,
                  course.uuid
                )
              );
            },
          },
          secondaryAction: {
            children: WhatsApp,
            onClick: () =>
              whatsRedirect(
                `Olá, estou vindo através do website e gostaria de mais informações sobre o curso *${course.courseName} - ${course.courseArea} - ${course.courseLevel}*`,
                WHATSAPP_PHONE_NUMBER
              ),
          },
          title: course.courseName,
          tags: [
            { icon: AccessTime, label: course.courseDuration },
            { icon: School, label: course.courseLevel },
          ],
          img: {
            src: getThumbnail(course.courseImage.imageURL),
            alt: course.courseImage.imageDescription,
          },
        };
      }),
      navigation: {
        nextEl: "#forward",
        prevEl: "#backwards",
      },
    },

    CourseTabsProps: {
      items: ["Pós-graduação"],
      handleChange: (event, newValue) => {
        setActiveTab(newValue);
      },
      value: activeTab,
    },
    id: "course_section",
    CourseNavigationProps: {
      backwardButton: {
        id: "backwards",
        color: "primary",
      },
      forwardButton: {
        id: "forward",
        color: "primary",
      },
    },
  };

  return (
    <React.Fragment>
      <Head>
        <meta property="og:title" content={META_TAGS.title} />
        <meta property="og:description" content={META_TAGS.description} />
        <meta name="description" content={META_TAGS.description} />
      </Head>
      <LandingPage
        AboutSectionProps={aboutSectionProps}
        DefenseSectionProps={defenseSectionProps}
        CourseSectionProps={courseSectionProps}
        HeroSectionProps={heroSectionProps}
        DynamicSectionsProps={dynamicSectionProps}
      />
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
