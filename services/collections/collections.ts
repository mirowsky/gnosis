import {
  BlogCollectionType,
  CourseCollectionType,
  FAQCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";
import { httpGet } from "@workspace/utility";

interface IQueryable<T> {
  findOne: (id: string) => Promise<T>;
  findAll: () => Promise<T[]>;
}

class FirebaseService<T> implements IQueryable<T> {
  private readonly baseRoute =
    "https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/";

  private readonly apiRoute: string;

  constructor(collection: string) {
    this.apiRoute = `${this.baseRoute}${collection}`;
  }

  findAll = async (): Promise<T[]> => {
    return await httpGet(`${this.apiRoute}`);
  };

  findOne = async (id: string): Promise<T> => {
    return await httpGet(`${this.apiRoute}/${id}`);
  };
}

interface IFirebaseCollectionFactory {
  createCourses: () => FirebaseService<CourseCollectionType>;
  createBlog: () => FirebaseService<BlogCollectionType>;
  createTestimonial: () => FirebaseService<TestimonialCollectionType>;
  createFAQ: () => FirebaseService<FAQCollectionType>;
}

export class FirebaseCollectionFactory implements IFirebaseCollectionFactory {
  createBlog = () => {
    return new FirebaseService<BlogCollectionType>("gnosisBlog");
  };

  createCourses = () => new FirebaseService<CourseCollectionType>("coursesNew");

  createFAQ = () => new FirebaseService<FAQCollectionType>("faq");

  createTestimonial = () =>
    new FirebaseService<TestimonialCollectionType>("testimonials");
}
