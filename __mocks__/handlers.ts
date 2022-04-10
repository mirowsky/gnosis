import faker from "@faker-js/faker";
import { COLLECTIONS_API_ROUTES } from "@workspace/contants";
import { BlogCollectionType } from "@workspace/types";
import { rest } from "msw";

//fetching after the "window" object is available will be mocked by "mocks/browser.js", fetching before it will be mocked by "mocks/server.js"

const randomBlogPost = (): BlogCollectionType => ({
  blogActive: true,
  blogDescription: faker.lorem.lines(5),
  blogPost: faker.lorem.paragraphs(10),
  blogTitle: faker.lorem.words(3),
  featuredImage: {
    imageURL: faker.image.avatar(),
    imageDescription: faker.lorem.sentences(2),
  },
  slug: "blog-post-1",
  uuid: faker.datatype.uuid(),
});

const blogHandler = rest.get(COLLECTIONS_API_ROUTES.blog, (req, res, ctx) => {
  return res(
    ctx.json([
      randomBlogPost(),
      randomBlogPost(),
      randomBlogPost(),
    ] as BlogCollectionType[])
  );
});

export const handlers = [blogHandler];
