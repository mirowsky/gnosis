import { AboutSection, AboutSectionProps } from "../About/AboutSection";

export type AboutProxyProps = {};

export const AboutProxy = (props: AboutProxyProps) => {
  return <AboutSection {...PROPS} />;
};

const PROPS = {
  id: "about_us_section",
  aboutText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in enim vitae augue facilisis semper ut eget ligula. Vestibulum feugiat congue odio ut pretium. Praesent velit sapien, aliquet eu ipsum faucibus, malesuada vehicula neque. Pellentesque et blandit est. Proin aliquet orci sapien, quis semper tortor vehicula ullamcorper. Aliquam pellentesque",
  sectionTitle: "O Instituto Gnosis",
};