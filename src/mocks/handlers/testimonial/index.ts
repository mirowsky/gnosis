import faker from "@faker-js/faker";
import { COLLECTIONS_API_ROUTES } from "@workspace/constants";
import { getRandomImage } from "../../utility";
import { rest } from "msw";

const randomTestimonial = (
  amount: number
): import("../../../../types").TestimonialCollectionType[] => {
  return Array.from({ length: amount }).map((_val, _index) => {
    return {
      slug: faker.lorem.slug(),
      testimonialLocation: faker.address.state(),
      testimonialName: faker.name.firstName(),
      testimonialPicture: {
        imageDescription: faker.lorem.sentence(),
        imageURL: getRandomImage(),
      },
      testimonialText: faker.lorem.sentences(5),
      uuid: faker.datatype.uuid(),
    };
  });
};

const findAllTestimonial = rest.get(
  COLLECTIONS_API_ROUTES.testimonials,
  (req, res, ctx) => {
    return res(ctx.json([...randomTestimonial(10)]));
  }
);

export const testimonialHandlers = [findAllTestimonial];
