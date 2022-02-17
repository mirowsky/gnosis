import {
  CoursePageProps,
  CoursePage as CoursePageComponent,
} from "@workspace/components/pages";
import { CourseCollectionType } from "@workspace/types";
import axios, { AxiosResponse } from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { convertToSlug } from "@workspace/utility";

type CoursePageDataProps = CourseCollectionType;

const CoursePage = (props: CoursePageDataProps) => {
  console.log(props);

  return <div></div>;
};

export default CoursePage;

type CourseStaticPaths = GetStaticPaths<{
  level: string;
  area: string;
  slug: string;
  id: string;
}>;

export const getStaticPaths: CourseStaticPaths = async ({
  defaultLocale,
  locales,
}) => {
  const courseRequest: AxiosResponse<CourseCollectionType[]> = await axios.get(
    "https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/coursesNew"
  );

  const courseData = courseRequest.data;

  return {
    paths: courseData.map((value, index) => {
      return {
        params: {
          area: convertToSlug(value.courseArea),
          level: convertToSlug(value.courseLevel),
          slug: convertToSlug(value.courseName),
          id: value.uuid,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CoursePageDataProps> = async ({
  defaultLocale,
  locale,
  locales,
  params,
  preview,
  previewData,
}) => {
  const paramsData = params as {
    level: string;
    area: string;
    slug: string;
    id: string;
  };

  const courseByIdRequest: AxiosResponse<CourseCollectionType> =
    await axios.get(`
  https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/coursesNew/${paramsData.id}
  `);

  const courseByIdRequestData = courseByIdRequest.data;

  return {
    props: {
      courseEmecURL: "url",
      uuid: courseByIdRequestData.uuid,
      courseSyllabus: courseByIdRequestData.courseSyllabus,
      courseArea: courseByIdRequestData.courseArea,
      courseDescription: courseByIdRequestData.courseDescription,
      courseDuration: courseByIdRequestData.courseDuration,
      courseEmecPicture: courseByIdRequestData.courseEmecPicture,
      courseImage: courseByIdRequestData.courseImage,
      courseLevel: courseByIdRequestData.courseLevel,
      courseName: courseByIdRequestData.courseName,
    },
  };
};
