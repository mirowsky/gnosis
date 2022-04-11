import { httpGet } from "./httpGet";
import { httpPost } from "./httpPost";

export const HTTP = {
  get: httpGet,
  post: httpPost,
} as const;
