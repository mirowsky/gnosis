import React from "react";
import { AccessTime, School, WhatsApp } from "@mui/icons-material";
import { WHATSAPP_PHONE_NUMBER } from "@workspace/constants";
import { useDetectMobile, useWhatsAppRedirect } from "@workspace/hooks";
import { CourseCollectionType, ThemeStyles } from "@workspace/types";
import { getCourseURL, getThumbnail } from "@workspace/utility";
import { useRouter } from "next/router";
import { CourseSection } from "../Courses/CoursesSection";

export type CourseProxyProps = {
  items: CourseCollectionType[];
  sx?: ThemeStyles;
};

export const CoursesProxy = ({ items = [], sx }: CourseProxyProps) => {
  const router = useRouter();
  const isMobile = useDetectMobile();
  const whatsRedirect = useWhatsAppRedirect(isMobile ? "mobile" : "desktop");
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <CourseSection
      {...{
        sx: sx,
        CourseSliderProps: {
          items: items.map((course, _index) => {
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
          handleChange: (_event, newValue) => {
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
      }}
    />
  );
};
