import { insert } from ".";

// URL refers to a hefesto generated image URL, dont pass just any URL, it will not work
export const getThumbnail = (url: string) => {
  return insert(url.split("gallery"), 1, "gallery_thumbnail").join("");
};
