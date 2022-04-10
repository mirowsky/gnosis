import { FAQSectionProps } from "@workspace/components/layouts";
import { FAQCollectionType } from "@workspace/types";
import React from "react";
export const createFAQSection = (
  items: FAQCollectionType[]
): FAQSectionProps => {
  return {
    items: items.map((item, _index) => {
      return {
        answer: item.answer,
        question: item.question,
        onClick: () => {},
        open: false,
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
