import { FAQSectionProps } from "@workspace/components/shared";
import { FAQCollectionType } from "@workspace/types";
import React from "react";

export const createFAQSection = (
  items: FAQCollectionType[],
  state: Record<number, boolean>,
  setState: React.Dispatch<React.SetStateAction<Record<number, boolean>>>
): FAQSectionProps => {
  return {
    items: items.map((item, index) => {
      return {
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
    }),
    sectionTitle:
      "Encontre as respostas que você precisa em nosso centro de ajuda",
    LoadMoreButtonProps: {
      children: "Ver mais perguntas",
      onClick: () => {},
      variant: "outlined",
      color: "primary",
    },
  };
};
