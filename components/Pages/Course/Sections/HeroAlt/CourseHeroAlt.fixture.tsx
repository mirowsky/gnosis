import {
  CalendarToday,
  Payment,
  School,
  Timelapse,
  WhatsApp,
} from "@mui/icons-material";
import type { CourseHeroAltProps } from "./CourseHeroAlt";

export const DEFAULT_CourseHeroAlt_TESTING_PROPS: CourseHeroAltProps = {
  TruncateTextProps: {
    numberOfLines: 4,
  },
  ExpandDescriptionButtonProps: { children: "Ver mais" },
  SecondaryButtonProps: {
    children: <WhatsApp />,
  },
  courseDescription:
    "A especialidade de sexologia é um ramo multidisciplinar que estuda a psicologia humana e suas manifestações sexuais, estudando todos os lados da sexualidade, desde o desenvolvimento sexual e mecanismos de situações eróticas até comportamento sexual e apego emocional. Vários são os ramos e especialidades que podem ser abrangidos pela sexologia, sendo considerado um ramo multidisciplinar, o estudo pode abranger área médica como aborto e controle de natalidade, como área psicológica como abuso sexual, técnicas de reprodução e saúde sexual.",
  courseImage: {
    url: "https://source.unsplash.com/random",
    alt: "This is a placeholder, replace me",
  },
  courseName: "Alergia e imunologia",
  PrimaryButtonProps: {
    children: "Saiba mais",
  },
  courseBenefits: [
    { icon: Timelapse, label: "600 horas conteúdo" },
    { icon: School, label: "Curso de pós-graduação" },
    { icon: CalendarToday, label: "Inicie imediatamente após a inscrição" },
    { icon: Payment, label: "Valores sob consulta" },
  ],
};

export const CourseHeroAlt_TEST_ID = {} as const;
