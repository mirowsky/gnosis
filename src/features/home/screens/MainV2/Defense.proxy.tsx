import { DefenseSectionProps, DefenseSection } from "../Defense/DefenseSection";

export type DefenseProxyProps = {} & DefenseSectionProps;

export const DefenseProxy = (props: DefenseProxyProps) => {
  return <DefenseSection {...props} />;
};
