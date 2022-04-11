import {
  BlogCollectionType,
  CourseCollectionType,
  FAQCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";
import { HTTPService } from "..";

interface IQueryable<T> {
  findOne: (id: string) => Promise<T>;
  findAll: () => Promise<T[]>;
}

class FirebaseService<T> implements IQueryable<T> {
  constructor(
    private readonly httpService: HTTPService,
    private readonly collection: string
  ) {}

  findAll = async (): Promise<T[]> => {
    return await this.httpService.get(this.collection);
  };

  findOne = async (id: string): Promise<T> => {
    return await this.httpService.get(`${this.collection}/${id}`);
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
