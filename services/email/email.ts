import { HTTP } from "@workspace/utility";

interface ISendEmail<T extends {}> {
  send: (body: T) => Promise<void>;
}

type ContactFormBody = {
  email: string;
  name: string;
  phone: string;
  message: string;
};

type CourseFormBody = ContactFormBody & { course: string };

type EmailConfig = {
  baseUrl: string;
};

export class EmailService {
  constructor(private readonly config: EmailConfig) {}

  getBaseURL = () => {
    return this.config.baseUrl;
  };
}

class EmailSender<T extends {}> implements ISendEmail<T> {
  constructor(
    private readonly service: EmailService,
    private readonly path: string
  ) {}

  send: (body: T) => Promise<void> = async (body) => {
    return await HTTP.post(`${this.service.getBaseURL()}/${this.path}`, body);
  };
}

interface IEmailSenderFactory {
  createContactSender: () => EmailSender<ContactFormBody>;
  createCourseSender: () => EmailSender<CourseFormBody>;
}

export class EmailSenderFactory implements IEmailSenderFactory {
  constructor(private readonly service: EmailService) {}

  createContactSender: () => EmailSender<ContactFormBody> = () => {
    return new EmailSender(this.service, "gnosis");
  };

  createCourseSender: () => EmailSender<CourseFormBody> = () => {
    return new EmailSender(this.service, "gnosis-curso");
  };
}
