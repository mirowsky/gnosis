export const IS_PROD = process.env.NODE_ENV === "production";

export const API_ROUTE_BASE =
  "https://us-central1-gnosis-webapp.cloudfunctions.net/api";

/**
 * Contact required body - {name: string, email: string, phone: string, message: string}
 *
 * Course required body - {name: string, email: string, phone: string, message: string, course: string}
 */
export const EMAIL_API_ROUTES = {
  contact:
    "https://us-central1-atlascodedev-landing.cloudfunctions.net/api/sendMail/gnosis",
  course:
    "https://us-central1-atlascodedev-landing.cloudfunctions.net/api/sendMail/gnosis-curso",
};

export const FORM_API_ROUTES = {
  contactForm: `${API_ROUTE_BASE}/forms/contact`,
  courseInterest: `${API_ROUTE_BASE}/forms/course-interest`,
  newsletter: `${API_ROUTE_BASE}/forms/newsletter-subscribe`,
};

/**
 * Base value retrivies all entries in this collection, passing an additional parameter to the end of this route will retrieve by ID
 */
export const COLLECTIONS_API_ROUTES = {
  courses: `${API_ROUTE_BASE}/collections/entries/coursesNew`,
  blog: `${API_ROUTE_BASE}/collections/entries/gnosisBlog`,
  testimonials: `${API_ROUTE_BASE}/collections/entries/testimonials`,
  faq: `${API_ROUTE_BASE}/collections/entries/faq`,
  blogSingle: (uuid: string) =>
    `${API_ROUTE_BASE}/collections/entries/gnosisBlog/${uuid}`,
};

export const GTM_ID = `${process.env.GTM}`;

export const WHATSAPP_PHONE_NUMBER = "555191431009";

export const META_TAGS = {
  title:
    "Instituto Educacional Gnosis - Cursos de pós-graduação na área da medicina.",

  description:
    'O Instituto Educacional Gnosis trabalha para trazer ao mercado cursos de pós-graduação, extensão e multidisciplinares capazes de impulsionar a sua carreira. Mantendo a excelência de uma instituição tradicional e trazendo ao mesmo tempo a modernidade do aprendizado à distância. Conheça nossos cursos de pós-graduação e extensão na área da medicina."',
};
