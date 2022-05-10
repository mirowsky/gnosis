import { ThemeStyles } from "@workspace/types";
import { AboutSection, AboutSectionProps } from "../About/AboutSection";

export type AboutProxyProps = {
  sx?: ThemeStyles;
};

export const AboutProxy = ({ sx }: AboutProxyProps) => {
  return <AboutSection {...PROPS} sx={sx} />;
};

const PROPS = {
  id: "about_us_section",
  aboutText: `
O Instituto Gnosis atua no segmento de Pós-Graduação em medicina, 
focando seus esforços em entregar ensino de qualidade a qualquer distância, alinhado com as diversas
exigências e atualizações do mercado, preparando profissionais competentes e valorizados em suas
respectivas áreas. Acreditamos na educação como veículo de aprimoramento e evolução em diversos
aspectos da vida humana, portanto trabalhamos com professores com vasta experiência e capacidade
de transformar carreiras e mentes através dos nossos cursos.`,
  sectionTitle: "O Instituto Gnosis",
};
