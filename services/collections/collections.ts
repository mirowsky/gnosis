import {
  BlogCollectionType,
  CourseCollectionType,
  FAQCollectionType,
  TestimonialCollectionType,
} from "@workspace/types";
import { HTTPService } from "../http";

interface IQueryable<T> {
  findOne: (id: string) => Promise<T>;
  findAll: () => Promise<T[]>;
}

class CollectionsService<T> implements IQueryable<T> {
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

interface ICollectionServiceFactory {
  createCourses: () => CollectionsService<CourseCollectionType>;
  createBlog: () => CollectionsService<BlogCollectionType>;
  createTestimonial: () => CollectionsService<TestimonialCollectionType>;
  createFAQ: () => CollectionsService<FAQCollectionType>;
}

export class CollectionServiceFactory implements ICollectionServiceFactory {
  constructor(private readonly httpService: HTTPService) {}

  createBlog = () => {
    return new CollectionsService<BlogCollectionType>(
      this.httpService,
      "gnosisBlog"
    );
  };

  createCourses = () =>
    new CollectionsService<CourseCollectionType>(
      this.httpService,
      "coursesNew"
    );

  createFAQ = () =>
    new CollectionsService<FAQCollectionType>(this.httpService, "faq");

  createTestimonial = () =>
    new CollectionsService<TestimonialCollectionType>(
      this.httpService,
      "testimonials"
    );
}
