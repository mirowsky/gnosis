import { ContactFormBody, CourseFormBody } from "@workspace/types";
import { HTTPService } from "..";

interface ISubmitForm<T extends {}> {
  submit: (body: T) => Promise<void>;
}

class FormSubmitter<T extends {}> implements ISubmitForm<T> {
  constructor(
    private readonly httpService: HTTPService,
    private readonly path: string
  ) {}

  submit: (body: T) => Promise<void> = async (body) => {
    return await this.httpService.post(this.path, body);
  };
}

interface IFormSubmitterFactory {
  createCourseFormSubmitter: () => FormSubmitter<CourseFormBody>;
  createContactFormSubmitter: () => FormSubmitter<ContactFormBody>;
  createNewsletterFormSubmitter: () => FormSubmitter<{ email: string }>;
}

export class FormSubmitterFactory implements IFormSubmitterFactory {
  constructor(private readonly httpService: HTTPService) {}

  createContactFormSubmitter: () => FormSubmitter<ContactFormBody> = () =>
    new FormSubmitter(this.httpService, "contact");

  createCourseFormSubmitter: () => FormSubmitter<CourseFormBody> = () =>
    new FormSubmitter(this.httpService, "course-interest");

  createNewsletterFormSubmitter: () => FormSubmitter<{ email: string }> = () =>
    new FormSubmitter(this.httpService, "newsletter-subscribe");
}
