import React from "react";
import { CourseCollectionType } from "@workspace/types";
import SyllabusSection from "../../components/Syllabus/SyllabusSection";

export type CourseSyllabusProxyProps = {
  course: CourseCollectionType;
};

export const CourseSyllabusProxy = ({ course }: CourseSyllabusProxyProps) => {
  const [tab, activeTab] = React.useState(0);

  return (
    <SyllabusSection
      {...{
        activeIndex: tab,
        emec: {
          img: {
            alt: course.courseEmecPicture.imageDescription,
            src: course.courseEmecPicture.imageURL,
          },
          url: {
            href: course.courseEmecURL,
            label: `Certificado de EMEC - ${course.courseName} - ${course.courseLevel}`,
          },
        },
        handleChange: (_event, newValue) => activeTab(newValue),
        prerequisites: "Diploma de medicina válido em território brasileiro",
        syllabusItems: course.courseSyllabus.map((val, index) => {
          const syllabusItem = convertSyllabusItem(val);

          return {
            hours: syllabusItem.hour,
            title: syllabusItem.label,
          };
        }),
      }}
    />
  );
};

const convertSyllabusItem = (syllabusItem: string) => {
  const hour = syllabusItem.match(/([0-9].hs?)/gi);
  const label = syllabusItem.split("(")[0];

  return {
    hour: hour?.toString() ?? "00h",
    label: label || "not found",
  };
};
