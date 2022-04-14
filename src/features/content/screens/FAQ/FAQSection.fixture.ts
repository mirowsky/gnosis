import { DEFAULT_FAQCard_TESTING_PROPS } from "../FAQCard/FAQCard.fixture";
import type { FAQSectionProps } from "./FAQSection";

const item = DEFAULT_FAQCard_TESTING_PROPS;

export const DEFAULT_FAQSection_TESTING_PROPS: FAQSectionProps = {
  items: [item, item, item, item],
  sectionTitle:
    "Encontre as respostas que você precisa em nosso centro de ajuda",
};

export const FAQSection_TEST_ID = {} as const;
