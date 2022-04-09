import React from "react";
import { CourseSectionProps } from "@workspace/components/pages";
import { WHATSAPP_PHONE_NUMBER } from "@workspace/contants";
import { NextRouter } from "next/router";
import { getCourseURL, getThumbnail } from "@workspace/utility";
import { AccessTime, School, WhatsApp } from "@mui/icons-material";
import { CourseCollectionType } from "@workspace/types";
import { useWhatsAppRedirect } from "@workspace/hooks";

export const createCourseSection = (params: {
  router: NextRouter;
  whatsAppHandler: ReturnType<typeof useWhatsAppRedirect>;
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  courses?: CourseCollectionType[];
}): CourseSectionProps => {
  return {
    CourseSliderProps: {
      items: (params?.courses ?? []).map((course, _index) => {
        return {
          loading: true,
          primaryAction: {
            children: "Saiba mais",
            onClick: () => {
              params.router.push(
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
              params.whatsAppHandler(
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
      handleChange: (_event, newValue) => {
        params.setActiveTab(newValue);
      },
      value: params.activeTab,
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
};
