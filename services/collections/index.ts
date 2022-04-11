import { API_ROUTE_BASE } from "@workspace/contants";
import { HTTPService } from "services/http";
import { FirebaseCollectionFactory } from "./collections";

const collectionFactory = new FirebaseCollectionFactory(
  new HTTPService({ baseURL: API_ROUTE_BASE })
);

const CoursesService = collectionFactory.createCourses();
const BlogService = collectionFactory.createBlog();
const FAQService = collectionFactory.createFAQ();
const TestimonialService = collectionFactory.createTestimonial();

export { CoursesService, BlogService, FAQService, TestimonialService };
