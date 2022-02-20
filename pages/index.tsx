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
import { getCourseURL, handleMenuClick } from "@workspace/utility";
import {
  BlogCollectionType,
  CourseCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useDetectMobile, useWhatsAppRedirect } from "@workspace/hooks";

export interface IndexPageProps {
  courses: CourseCollectionType[];
  blog?: BlogCollectionType[];
  testimonials?: TestimonialCollectionType[];
}

const Home: NextPage<IndexPageProps> = ({ courses, blog, testimonials }) => {
  const router = useRouter();
  const isMobile = useDetectMobile();
  const whatsRedirect = useWhatsAppRedirect(isMobile ? "mobile" : "desktop");

  const courseSectionProps: LandingPageProps["CourseSectionProps"] = {
    CourseSliderProps: {
      items: courses.map((course, index) => {
        return {
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
                "5551984773704"
              ),
          },
          title: course.courseName,
          tags: [
            { icon: AccessTime, label: course.courseDuration },
            { icon: School, label: course.courseLevel },
          ],
          img: {
            src: course.courseImage.imageURL,
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
      handleChange: () => {},
      value: 0,
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

  const heroSectionProps: LandingPageProps["HeroSectionProps"] = {
    altText:
      "Conheça nossos cursos de pós-graduação e extensão em Medicina, à distância.",
    img: {
      alt: "Médico homem, jovem, sorrindo, de braços cruzados e olhando para a câmera.",
      src: "/images/hero-doc-cut-opt.webp",
    },
    ctaPrimary: {
      label: "Ver cursos",
      onClick: () => handleMenuClick(router, "#course_section"),
    },
    ctaSecondary: {
      label: "Fale conosco",
      onClick: () => handleMenuClick(router, "#contact_section"),
    },
    mainText: "O futuro da sua carreira está em suas mãos.",
  };

  const defenseSectionProps: LandingPageProps["DefenseSectionProps"] = {
    items: [
      { icon: AssuredWorkloadTwoTone, label: "Cursos reconhecidos pelo MEC" },
      { icon: School, label: "Cursos 100% EAD" },
      { icon: AccessTime, label: "Cursos intensivos e extensivos" },
      { icon: CastForEducation, label: "Ambiente de aprendizado online" },
      { icon: HistoryEdu, label: "TCC opcional" },
      { icon: SupportAgent, label: "Suporte personalizado" },
    ],
  };

  const dynamicSectionProps: LandingPageProps["DynamicSectionsProps"] = {
    BlogSectionProps: {
      items: [],
      sectionTitle: "Confira nossas últimas postagens.",
      ButtonProps: {
        children: "Ver mais postagens",
        color: "primary",
        onClick: () => {},
      },
      id: "blog_section",
    },
    FAQSectionProps: {
      items: [],
      sectionTitle:
        "Encontre as respostas que você precisa em nosso centro de ajuda",
      LoadMoreButtonProps: {
        children: "Ver mais perguntas",
        onClick: () => {},
        variant: "outlined",
        color: "primary",
      },
    },
    TestimonialSectionProps: {
      sectionTitle: "O que nossos alunos dizem sobre o Instituto Gnosis.",
      TestimonialSliderProps: {
        items: [],
      },
    },
  };

  const aboutSectionProps: LandingPageProps["AboutSectionProps"] = {
    id: "about_us_section",
    aboutText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in enim vitae augue facilisis semper ut eget ligula. Vestibulum feugiat congue odio ut pretium. Praesent velit sapien, aliquet eu ipsum faucibus, malesuada vehicula neque. Pellentesque et blandit est. Proin aliquet orci sapien, quis semper tortor vehicula ullamcorper. Aliquam pellentesque",
    sectionTitle: "O Instituto Gnosis",
  };

  return (
    <LandingPage
      AboutSectionProps={aboutSectionProps}
      DefenseSectionProps={defenseSectionProps}
      CourseSectionProps={courseSectionProps}
      HeroSectionProps={heroSectionProps}
      DynamicSectionsProps={dynamicSectionProps}
    />
  );
};

export default Home;

export const getStaticProps: GetStaticProps<IndexPageProps> = async ({
  params,
}) => {
  const courseRequest: AxiosResponse<CourseCollectionType[]> = await axios.get(
    "https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/coursesNew"
  );
  const blogRequest: AxiosResponse<BlogCollectionType[]> = await axios.get(
    "https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/gnosisBlog"
  );
  const testimonialRequest: AxiosResponse<TestimonialCollectionType[]> =
    await axios.get(
      "https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/testimonials"
    );

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
