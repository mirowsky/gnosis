import { COLLECTIONS_API_BASE_URL } from "src/constants";
import { HTTPClient, HTTPService } from "../http";
import { CollectionServiceFactory } from "./collections";

const collectionFactory = new CollectionServiceFactory(
  new HTTPService({
    baseURL: COLLECTIONS_API_BASE_URL,
    client: new HTTPClient(),
  })
);

const CoursesService = collectionFactory.createCourses();
const BlogService = collectionFactory.createBlog();
const FAQService = collectionFactory.createFAQ();
const TestimonialService = collectionFactory.createTestimonial();

export { CoursesService, BlogService, FAQService, TestimonialService };
