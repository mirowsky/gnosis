import type { GetStaticProps, NextPage } from "next";
import { LandingPage, LandingPageProps } from "@workspace/components/pages";
import {
  AccessTime,
  AssuredWorkloadTwoTone,
  CastForEducation,
  HistoryEdu,
  School,
  SupportAgent,
  Timelapse,
  WhatsApp,
} from "@mui/icons-material";
import { scrollToElem } from "@workspace/utility";
import {
  BlogCollectionType,
  CourseCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";
import axios, { AxiosResponse } from "axios";

export interface IndexPageProps {
  courses: CourseCollectionType[];
  blog?: BlogCollectionType[];
  testimonials?: TestimonialCollectionType[];
}

const Home: NextPage<IndexPageProps> = ({ courses, blog, testimonials }) => {
  return (
    <LandingPage
      AboutSectionProps={PAGE_PROPS.AboutSectionProps}
      DefenseSectionProps={PAGE_PROPS.DefenseSectionProps}
      CourseSectionProps={{
        ...PAGE_PROPS.CourseSectionProps,
        CourseSliderProps: {
          items: courses.map((course, index) => {
            return {
              primaryAction: {
                children: "Saiba mais",
                onClick: () => {},
              },
              secondaryAction: {
                children: "Saiba mais",
                onClick: () => {},
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
          navigation:
            PAGE_PROPS.CourseSectionProps.CourseSliderProps.navigation,
        },
      }}
      HeroSectionProps={PAGE_PROPS.HeroSectionProps}
      DynamicSectionsProps={PAGE_PROPS.DynamicSectionsProps}
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

const courseItem = {
  img: { src: "https://source.unsplash.com/random", alt: "img" },
  primaryAction: { children: "Saiba mais", onClick: () => {} },
  secondaryAction: { children: WhatsApp, onClick: () => {} },
  tags: [
    { icon: Timelapse, label: "24 meses" },
    { icon: School, label: "Curso de pós-graduação" },
  ],
  title: "Course name placeholder",
};

const PAGE_PROPS: LandingPageProps = {
  DefenseSectionProps: {
    items: [
      { icon: AssuredWorkloadTwoTone, label: "Cursos reconhecidos pelo MEC" },
      { icon: School, label: "Cursos 100% EAD" },
      { icon: AccessTime, label: "Cursos intensivos e extensivos" },
      { icon: CastForEducation, label: "Ambiente de aprendizado online" },
      { icon: HistoryEdu, label: "TCC opcional" },
      { icon: SupportAgent, label: "Suporte personalizado" },
    ],
  },
  CourseSectionProps: {
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
    CourseSliderProps: {
      navigation: {
        nextEl: "#forward",
        prevEl: "#backwards",
      },
      items: [
        courseItem,
        courseItem,
        courseItem,
        courseItem,
        courseItem,
        courseItem,
      ],
    },
  },
  HeroSectionProps: {
    altText:
      "Conheça nossos cursos de pós-graduação e extensão em Medicina, à distância.",
    img: {
      alt: "Médico homem, jovem, sorrindo, de braços cruzados e olhando para a câmera.",
      src: "/images/hero-doc-cut-opt.webp",
    },
    ctaPrimary: {
      label: "Ver cursos",
      onClick: () => scrollToElem("#course_section"),
    },
    ctaSecondary: {
      label: "Fale conosco",
      onClick: () => scrollToElem("#contact_section"),
    },
    mainText: "O futuro da sua carreira está em suas mãos.",
  },
  DynamicSectionsProps: {
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
  },
  AboutSectionProps: {
    id: "about_us_section",
    aboutText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in enim vitae augue facilisis semper ut eget ligula. Vestibulum feugiat congue odio ut pretium. Praesent velit sapien, aliquet eu ipsum faucibus, malesuada vehicula neque. Pellentesque et blandit est. Proin aliquet orci sapien, quis semper tortor vehicula ullamcorper. Aliquam pellentesque",
    sectionTitle: "O Instituto Gnosis",
  },
};
