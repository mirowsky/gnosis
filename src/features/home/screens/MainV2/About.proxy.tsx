import { AboutSection, AboutSectionProps } from "../About/AboutSection";

export type AboutProxyProps = {} & AboutSectionProps;

export const AboutProxy = (props: AboutProxyProps) => {
  return <AboutSection {...props} />;
};
