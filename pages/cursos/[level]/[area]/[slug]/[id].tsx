import { CourseCollectionType } from "@workspace/types";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { convertToSlug } from "@workspace/utility";
import Head from "next/head";
import { CoursesService } from "@workspace/services";
import { Course } from "@workspace/features";

type CoursePageDataProps = CourseCollectionType;

const CoursePage = (props: CoursePageDataProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>
          Instituto Educacional Gnosis -
          {`${props.courseName} - ${props.courseLevel} - ${props.courseArea}`}
        </title>

        <meta property="description" content={props.courseDescription} />
      </Head>

      <Course course={props} />
    </React.Fragment>
  );
};

export default CoursePage;

type CourseStaticPaths = GetStaticPaths<{
  level: string;
  area: string;
  slug: string;
  id: string;
}>;

export const getStaticPaths: CourseStaticPaths = async (props) => {
  const data = await CoursesService.findAll();

  return {
    paths: data.map((value, _index) => {
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
  params,
}) => {
  const paramsData = params as {
    level: string;
    area: string;
    slug: string;
    id: string;
  };

  const courseByIdRequestData = await CoursesService.findOne(paramsData.id);

  return {
    props: {
      courseEmecURL: courseByIdRequestData.courseEmecURL,
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
