import faker from "@faker-js/faker";
import { COLLECTIONS_API_ROUTES } from "src/constants";
import { rest } from "msw";

const randomFAQ = (
  amount: number
): import("../../../../types").FAQCollectionType[] => {
  return Array.from({ length: amount }).map((_value, index) => {
    return {
      answer: faker.lorem.sentences(5),
      question: faker.lorem.sentences(2),
    };
  });
};

const findAllFAQ = rest.get(COLLECTIONS_API_ROUTES.faq, (req, res, ctx) => {
  return res(ctx.json([...randomFAQ(5)]));
});

export const FAQHandlers = [findAllFAQ];
