import { CoursePageAlt as CoursePageComponent } from "@workspace/components/pages";
import { CourseCollectionType } from "@workspace/types";
import axios, { AxiosResponse } from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { convertToSlug } from "@workspace/utility";
import {
  BarChart,
  CalendarToday,
  CalendarTodayOutlined,
  Money,
  Paid,
  Payment,
  School,
  Timelapse,
  WhatsApp,
} from "@mui/icons-material";

const convertSyllabusItem = (syllabusItem: string) => {
  const hour = syllabusItem.match(/([0-9].hs?)/gi);
  const label = syllabusItem.split("(")[0];

  return {
    hour: hour?.toString() ?? "00h",
    label: label || "not found",
  };
};

type CoursePageDataProps = CourseCollectionType;

const CoursePage = (props: CoursePageDataProps) => {
  const [tab, activeTab] = React.useState(0);
  const [descriptionCollapsed, setDescriptionCollapsed] = React.useState(true);

  return (
    <CoursePageComponent
      CourseOverviewSectionProps={{
        items: [
          {
            caption: "Data de início",
            title: "Imediatamente após inscrição",
            icon: CalendarToday,
          },
          {
            caption: "Nível",
            title: `${props.courseLevel}`,
            icon: BarChart,
          },
          {
            caption: "Data de início",
            title: "Imediatamente após inscrição",
            icon: Money,
          },
          {
            caption: "Duração",
            title: "12 meses",
            icon: Timelapse,
          },
          {
            caption: "Cotação",
            title: "Sob consulta",
            icon: Paid,
          },
        ],
      }}
      CourseSyllabusSectionProps={{
        activeIndex: tab,
        emec: {
          img: {
            alt: props.courseEmecPicture.imageDescription,
            src: props.courseEmecPicture.imageURL,
          },
          url: {
            href: props.courseEmecURL,
            label: `Certificado de EMEC - ${props.courseName} - ${props.courseLevel}`,
          },
        },
        handleChange: (event, newValue) => {
          activeTab(newValue);
        },
        prerequisites: "Diploma de medicina válido em território brasileiro",
        syllabusItems: props.courseSyllabus.map((val, index) => {
          const syllabusItem = convertSyllabusItem(val);

          return {
            hours: syllabusItem.hour,
            title: syllabusItem.label,
          };
        }),
      }}
      CourseHeroAltProps={{
        courseBenefits: [
          {
            icon: Timelapse,
            label: `Conclusão em até ${props.courseDuration}`,
          },
          { icon: School, label: `Curso de ${props.courseLevel}` },
          {
            icon: CalendarTodayOutlined,
            label: "Inicie imediatamente após a inscrição",
          },
          {
            icon: Payment,
            label: "Valores sob consulta",
          },
        ],
        PrimaryButtonProps: {
          children: "Manifestar interesse",
          onClick: () => {},
        },
        ExpandDescriptionButtonProps: {
          children: descriptionCollapsed ? "Ver mais" : "Ver menos",
          onClick: () => {},
        },
        SecondaryButtonProps: {
          children: <WhatsApp />,
          onClick: () => {},
        },
        courseDescription: props.courseDescription,
        courseImage: {
          alt: props.courseImage.imageDescription,
          url: props.courseImage.imageURL,
        },
        courseName: props.courseName,
        TruncateTextProps: {
          numberOfLines: descriptionCollapsed ? 4 : false,
        },
      }}
    />
  );
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

  console.log(courseByIdRequestData);

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
