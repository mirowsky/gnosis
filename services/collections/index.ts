import { COLLECTIONS_API_BASE_URL } from "@workspace/contants";
import { HTTPService } from "../http";
import { FirebaseCollectionFactory } from "./collections";

const collectionFactory = new FirebaseCollectionFactory(
  new HTTPService({ baseURL: COLLECTIONS_API_BASE_URL })
);

const CoursesService = collectionFactory.createCourses();
const BlogService = collectionFactory.createBlog();
const FAQService = collectionFactory.createFAQ();
const TestimonialService = collectionFactory.createTestimonial();

export { CoursesService, BlogService, FAQService, TestimonialService };
