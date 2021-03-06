import { EMAIL_API_BASE_URL } from "@workspace/constants";
import { HTTPClient, HTTPService } from "../http";
import { EmailSenderFactory } from "./email";

const emailSenderFactory = new EmailSenderFactory(
  new HTTPService({ baseURL: EMAIL_API_BASE_URL, client: new HTTPClient() })
);

const ContactEmailSender = emailSenderFactory.createContactSender();

const CourseEmailSender = emailSenderFactory.createCourseSender();

export { CourseEmailSender, ContactEmailSender };
