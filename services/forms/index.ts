import { FORM_API_BASE_URL } from "@workspace/contants";
import { HTTPService } from "services/http";
import { FormSubmitterFactory } from "./forms";

const formFactory = new FormSubmitterFactory(
  new HTTPService({ baseURL: FORM_API_BASE_URL })
);

const ContactFormSubmitter = formFactory.createContactFormSubmitter();
const CourseFormSubmitter = formFactory.createCourseFormSubmitter();
const NewsletterSubmitter = formFactory.createNewsletterFormSubmitter();

export { NewsletterSubmitter, ContactFormSubmitter, CourseFormSubmitter };
