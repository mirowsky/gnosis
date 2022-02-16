import type { NextPage } from "next";
import { LandingPage, LandingPageProps } from "@workspace/components/pages";
import {
  AccessTime,
  AssuredWorkloadTwoTone,
  CastForEducation,
  HistoryEdu,
  School,
  SupportAgent,
  Timelapse,
  TimelapseOutlined,
  WhatsApp,
} from "@mui/icons-material";

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

const Home: NextPage = () => {
  return (
    <LandingPage
      AboutSectionProps={ABOUT_SECTION_PROPS}
      DefenseSectionProps={DEFENSE_SECTION_PROPS}
      CourseSectionProps={COURSE_SECTION_PROPS}
      HeroSectionProps={HERO_SECTION_PROPS}
      DynamicSectionsProps={DYNAMIC_SECTION_PROPS}
    />
  );
};

export default Home;

const DYNAMIC_SECTION_PROPS: LandingPageProps["DynamicSectionsProps"] = {
  BlogSectionProps: {
    items: [],
    sectionTitle: "Confira nossas últimas postagens.",
    ButtonProps: {
      children: "Ver mais postagens",
      color: "primary",
      onClick: () => {},
    },
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

const HERO_SECTION_PROPS: LandingPageProps["HeroSectionProps"] = {
  altText:
    "Conheça nossos cursos de pós-graduação e extensão em Medicina, à distância.",
  img: {
    alt: "Médico homem, jovem, sorrindo, de braços cruzados e olhando para a câmera.",
    src: "/images/hero-doc-cut-opt.webp",
  },
  ctaPrimary: {
    label: "Ver cursos",
    onClick: () => {},
  },
  ctaSecondary: {
    label: "Fale conosco",
    onClick: () => {},
  },
  mainText: "O futuro da sua carreira está em suas mãos.",
};

const ABOUT_SECTION_PROPS: LandingPageProps["AboutSectionProps"] = {
  aboutText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in enim vitae augue facilisis semper ut eget ligula. Vestibulum feugiat congue odio ut pretium. Praesent velit sapien, aliquet eu ipsum faucibus, malesuada vehicula neque. Pellentesque et blandit est. Proin aliquet orci sapien, quis semper tortor vehicula ullamcorper. Aliquam pellentesque",
  sectionTitle: "O Instituto Gnosis",
};

const COURSE_SECTION_PROPS: LandingPageProps["CourseSectionProps"] = {
  CourseTabsProps: {
    items: ["Pós-graduação"],
    handleChange: () => {},
    value: 0,
  },
  CourseNavigationProps: {
    backwardButton: {
      id: "#backwards",
      color: "primary",
    },
    forwardButton: {
      id: "#forward",
      color: "primary",
    },
  },
  CourseSliderProps: {
    navigation: {
      nextEl: "#forward",
      prevEl: "#backwards",
    },
    items: [courseItem, courseItem, courseItem],
  },
};

const DEFENSE_SECTION_PROPS: LandingPageProps["DefenseSectionProps"] = {
  items: [
    { icon: AssuredWorkloadTwoTone, label: "Cursos reconhecidos pelo MEC" },
    { icon: School, label: "Cursos 100% EAD" },
    { icon: AccessTime, label: "Cursos intensivos e extensivos" },
    { icon: CastForEducation, label: "Ambiente de aprendizado online" },
    { icon: HistoryEdu, label: "TCC opcional" },
    { icon: SupportAgent, label: "Suporte personalizado" },
  ],
};
