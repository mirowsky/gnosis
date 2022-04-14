import { convertToSlug } from "./convertToSlug";

export const getBlogURL = (blogTitle: string, uuid: string) => {
  return `/blog/${convertToSlug(blogTitle)}/${uuid}`;
};
