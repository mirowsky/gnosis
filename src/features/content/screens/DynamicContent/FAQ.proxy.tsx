import React from "react";
import { FAQCollectionType, ThemeStyles } from "@workspace/types";
import { FAQSection } from "../FAQ/FAQSection";

export type FAQProxyProps = {
  items: FAQCollectionType[];
  sx?: ThemeStyles;
};

type FAQState = { [key: number]: boolean };

export const FAQProxy = ({ items = [], sx }: FAQProxyProps) => {
  const [state, setState] = React.useState<FAQState>({});

  return (
    <FAQSection
      sx={sx}
      items={items.map((item, index) => {
        return {
          ...item,
          answer: item.answer,
          question: item.question,
          onClick: () => {
            setState((state: { [key: number]: boolean }) => {
              return {
                ...state,
                [index]: !state[index],
              };
            });
          },
          open: state[index],
        };
      })}
    />
  );
};
