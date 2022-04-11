import {
  BlogCollectionType,
  CourseCollectionType,
  FAQCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";
import { httpGet } from "@workspace/utility";
import { HTTPService } from "../http";

interface IQueryable<T> {
  findOne: (id: string) => Promise<T>;
  findAll: () => Promise<T[]>;
}

class FirebaseService<T> implements IQueryable<T> {
  private readonly apiRoute: string;

  constructor(private readonly httpService: HTTPService, collection: string) {
    this.apiRoute = `${this.httpService.config}${collection}`;
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
  constructor(private readonly httpService: HTTPService) {}

  createBlog = () => {
    return new FirebaseService<BlogCollectionType>(
      this.httpService,
      "gnosisBlog"
    );
  };

  createCourses = () =>
    new FirebaseService<CourseCollectionType>(this.httpService, "coursesNew");

  createFAQ = () =>
    new FirebaseService<FAQCollectionType>(this.httpService, "faq");

  createTestimonial = () =>
    new FirebaseService<TestimonialCollectionType>(
      this.httpService,
      "testimonials"
    );
}
