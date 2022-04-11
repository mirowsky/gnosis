import { EMAIL_API_BASE_URL } from "@workspace/contants";
import { HTTPClient, HTTPService } from "..";
import { EmailSenderFactory } from "./email";

const emailSenderFactory = new EmailSenderFactory(
  new HTTPService({ baseURL: EMAIL_API_BASE_URL, client: new HTTPClient() })
);

const ContactEmailSender = emailSenderFactory.createContactSender();

const CourseEmailSender = emailSenderFactory.createCourseSender();

export { CourseEmailSender, ContactEmailSender };
