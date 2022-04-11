import { FORM_API_BASE_URL } from "@workspace/contants";
import { HTTPClient, HTTPService } from "../";
import { FormSubmitterFactory } from "./forms";

const formFactory = new FormSubmitterFactory(
  new HTTPService({ baseURL: FORM_API_BASE_URL, client: new HTTPClient() })
);

const ContactFormSubmitter = formFactory.createContactFormSubmitter();
const CourseFormSubmitter = formFactory.createCourseFormSubmitter();
const NewsletterSubmitter = formFactory.createNewsletterFormSubmitter();

export { NewsletterSubmitter, ContactFormSubmitter, CourseFormSubmitter };
