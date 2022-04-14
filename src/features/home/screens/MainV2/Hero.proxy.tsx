import { HeroProps, Hero } from "../Hero/Hero";
export type HeroProxyProps = {} & HeroProps;

export const HeroProxy = (props: HeroProxyProps) => {
  return <Hero {...props} />;
};
