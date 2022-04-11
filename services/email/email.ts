import { ContactFormBody, CourseFormBody } from "@workspace/types";
import { HTTPService } from "..";

interface ISendEmail<T extends {}> {
  send: (body: T) => Promise<void>;
}

class EmailSender<T extends {}> implements ISendEmail<T> {
  constructor(
    private readonly httpService: HTTPService,
    private readonly path: string
  ) {}

  send: (body: T) => Promise<void> = async (body) => {
    return await this.httpService.post(`${this.path}`, body);
  };
}

interface IEmailSenderFactory {
  createContactSender: () => EmailSender<ContactFormBody>;
  createCourseSender: () => EmailSender<CourseFormBody>;
}

export class EmailSenderFactory implements IEmailSenderFactory {
  constructor(private readonly service: HTTPService) {}

  createContactSender: () => EmailSender<ContactFormBody> = () => {
    return new EmailSender(this.service, "gnosis");
  };

  createCourseSender: () => EmailSender<CourseFormBody> = () => {
    return new EmailSender(this.service, "gnosis-curso");
  };
}
