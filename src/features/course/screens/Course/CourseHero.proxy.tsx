import {
  Payment,
  CalendarTodayOutlined,
  School,
  Timelapse,
  WhatsApp,
} from "@mui/icons-material";
import { WHATSAPP_PHONE_NUMBER } from "@workspace/constants";
import { useDetectMobile, useWhatsAppRedirect } from "@workspace/hooks";
import { CourseCollectionType } from "@workspace/types";
import React from "react";
import CourseHeroAlt from "../HeroAlt/CourseHeroAlt";

export type CourseHeroProxyProps = {
  course: CourseCollectionType;
};

export const CourseHeroProxy = ({ course }: CourseHeroProxyProps) => {
  const [descriptionOpen, setDescriptionOpen] = React.useState(false);
  const isMobile = useDetectMobile();
  const whatsRedirect = useWhatsAppRedirect(isMobile ? "mobile" : "desktop");

  return (
    <CourseHeroAlt
      {...{
        courseBenefits: [
          {
            icon: Timelapse,
            label: `Conclusão: ${course.courseDuration}`,
          },
          { icon: School, label: `Curso de ${course.courseLevel}` },
          {
            icon: CalendarTodayOutlined,
            label: "Inicie imediatamente após a inscrição",
          },
          {
            icon: Payment,
            label: "Valores sob consulta",
          },
        ],
        courseDescription: course.courseDescription,
        courseImage: {
          alt: course.courseImage.imageDescription,
          url: course.courseImage.imageURL,
        },
        courseName: course.courseName,
        TruncateTextProps: {
          numberOfLines: !descriptionOpen ? 4 : false,
        },
        PrimaryButtonProps: {
          children: "Manifestar interesse",
          onClick: () => {},
        },
        ExpandDescriptionButtonProps: {
          children: descriptionOpen ? "Ver mais" : "Ver menos",
          onClick: () => setDescriptionOpen((prev) => !prev),
        },
        SecondaryButtonProps: {
          children: <WhatsApp />,
          onClick: () =>
            whatsRedirect(
              `Olá, estou vindo através do website e gostaria de mais informações sobre o curso *${course.courseName} - ${course.courseArea} - ${course.courseLevel}*`,
              WHATSAPP_PHONE_NUMBER
            ),
        },
      }}
    />
  );
};
