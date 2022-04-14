import { CourseSection, CourseSectionProps } from "../Courses/CoursesSection";

export type CourseProxyProps = {} & CourseSectionProps;

export const CoursesProxy = (props: CourseProxyProps) => {
  return <CourseSection {...props} />;
};
