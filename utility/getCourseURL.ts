import { convertToSlug } from "./convertToSlug";

export const getCourseURL = (
  area: string,
  level: string,
  courseName: string,
  uuid: string
) => {
  return `/cursos/${convertToSlug(level)}/${convertToSlug(
    area
  )}/${convertToSlug(courseName)}/${uuid}`;
};
