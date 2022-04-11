import faker from "@faker-js/faker";
import { BlogCollectionType } from "@workspace/types";
import { getRandomImage } from "../../utility";
import { mockBlogPostHTML } from "./mockHTMLPost";

const blogItem = (): BlogCollectionType => ({
  uuid: "0",
  blogActive: true,
  blogDescription: faker.lorem.lines(5),
  blogPost: mockBlogPostHTML,
  blogTitle: "Blog Post 0",
  featuredImage: {
    imageDescription: "alt text",
    imageURL: getRandomImage(),
  },
  slug: "blog-post-0",
});

export const blogData: BlogCollectionType[] = [
  {
    ...blogItem(),
    uuid: "8oI3c9JuBZhO5RcFVjRfH",
    blogTitle: "Blog Post 1",
    slug: "blog-post-1",
  },

  {
    ...blogItem(),
    uuid: "2",
    blogTitle: "Blog Post 3",
  },
  {
    ...blogItem(),
    uuid: "3",
    blogTitle: "Blog Post 3",
    slug: "blog-post-3",
  },
  {
    ...blogItem(),
    uuid: "4",
    blogTitle: "Blog Post 4",
    slug: "blog-post-4",
  },
  {
    ...blogItem(),
    uuid: "5",
    blogTitle: "Blog Post 5",
    slug: "blog-post-5",
  },
];
