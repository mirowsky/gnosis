import { blogHandlers } from "./handlers/blog";
import { courseHandlers } from "./handlers/course";
import { FAQHandlers } from "./handlers/faq";
import { testimonialHandlers } from "./handlers/testimonial";

export const handlers = [
  ...blogHandlers,
  ...FAQHandlers,
  ...testimonialHandlers,
];
