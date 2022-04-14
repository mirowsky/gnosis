import { HeroProps } from "@workspace/components/shared";
import { NextRouter } from "next/router";
import { handleMenuClick } from "src/utility";

export const createHeroSection = (router: NextRouter): HeroProps => {
  return {
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
};
