import { noop } from "@workspace/utility";
import type { HeroProps } from "./Hero";

export const DEFAULT_HERO_TESTING_PROPS: HeroProps = {
  mainText: "O futuro da sua carreira está em suas mãos",
  altText:
    "Conheça os nossos cursos de pós-graduação e extensão em Medicina à distância",
  ctaPrimary: {
    label: "Ver cursos",
    onClick: noop,
  },
  ctaSecondary: {
    label: "Fale conosco",
    onClick: noop,
  },
  img: {
    alt: "this is an alt text, replace me",
    src: "https://via.placeholder.com",
  },
};

export const HERO_TEST_ID = {};
