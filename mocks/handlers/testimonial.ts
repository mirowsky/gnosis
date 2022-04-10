import faker from "@faker-js/faker";
import { COLLECTIONS_API_ROUTES } from "@workspace/contants";
import { getRandomImage } from "mocks/utility";
import { rest } from "msw";

const randomTestimonial = (
  amount: number
): import("../../types").TestimonialCollectionType[] => {
  return Array.from({ length: amount }).map((_val, _index) => {
    return {
      slug: faker.lorem.slug(),
      testimonialLocation: faker.address.state(),
      testimonialName: faker.name.firstName(),
      testimonialPicture: {
        imageDescription: faker.lorem.sentence(),
        imageURL: getRandomImage(),
      },
      testimonialText: faker.lorem.sentence(5),
      uuid: faker.datatype.uuid(),
    };
  });
};

export const testimonialHandler = rest.get(
  COLLECTIONS_API_ROUTES.testimonials,
  (req, res, ctx) => {
    return res(ctx.json([...randomTestimonial(10)]));
  }
);
