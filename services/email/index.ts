import { EMAIL_API_BASE_URL } from "@workspace/contants";
import { EmailSenderFactory, EmailService } from "./email";

const prod_email_service = new EmailService({ baseUrl: EMAIL_API_BASE_URL });

const emailSenderFactory = new EmailSenderFactory(prod_email_service);

const ContactEmailSender = emailSenderFactory.createContactSender();

const CourseEmailSender = emailSenderFactory.createCourseSender();

export { CourseEmailSender, ContactEmailSender };
