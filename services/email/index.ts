/**
 * Contact required body - {name: string, email: string, phone: string, message: string}
 *
 * Course required body - {name: string, email: string, phone: string, message: string, course: string}
 */

//  export const EMAIL_API_ROUTES = {
//     contact:
//       "https://us-central1-atlascodedev-landing.cloudfunctions.net/api/sendMail/gnosis",
//     course:
//       "https://us-central1-atlascodedev-landing.cloudfunctions.net/api/sendMail/gnosis-curso",
//   };

interface IEmailSender {
  contact: (
    name: string,
    email: string,
    phone: string,
    message: string
  ) => Promise<void>;

  course: (
    name: string,
    email: string,
    phone: string,
    message: string,
    course: string
  ) => Promise<void>;
}

type EmailConfig = {
  baseUrl: string;
};

export class EmailService implements IEmailSender {
  constructor(private readonly config: EmailConfig) {}

  contact: (
    name: string,
    email: string,
    phone: string,
    message: string
  ) => Promise<void> = async (name, email, phone, message) => {
    return await new Promise((resolve, reject) => {});
  };

  course: (
    name: string,
    email: string,
    phone: string,
    message: string,
    course: string
  ) => Promise<void> = async (name, email, phone, message, course) => {
    return await new Promise((resolve, reject) => {});
  };
}
