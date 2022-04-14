import { FAQCollectionType } from "@workspace/types";
import { FAQSection } from "../FAQ/FAQSection";

export type FAQProxyProps = {
  items: FAQCollectionType[];
};

export const FAQProxy = ({ items = [] }: FAQProxyProps) => {
  return <FAQSection items={items} />;
};
