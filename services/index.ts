import { FirebaseCollectionFactory } from "./collections";

const factory = new FirebaseCollectionFactory();

const CoursesService = factory.createCourses();
const BlogService = factory.createBlog();
const FAQService = factory.createFAQ();
const TestimonialService = factory.createTestimonial();

export { CoursesService, BlogService, FAQService, TestimonialService };
