import { FAQCollectionType, ThemeStyles } from "@workspace/types";
import { FAQSection } from "../FAQ/FAQSection";

export type FAQProxyProps = {
  items: FAQCollectionType[];
  sx?: ThemeStyles;
};

export const FAQProxy = ({ items = [], sx }: FAQProxyProps) => {
  return <FAQSection sx={sx} items={items} />;
};
