import { FirebaseCollectionFactory } from "./collections";

const collectionFactory = new FirebaseCollectionFactory();

const CoursesService = collectionFactory.createCourses();
const BlogService = collectionFactory.createBlog();
const FAQService = collectionFactory.createFAQ();
const TestimonialService = collectionFactory.createTestimonial();

export { CoursesService, BlogService, FAQService, TestimonialService };
