import { Theme } from "@mui/material";
import { Breakpoint, SxProps } from "@mui/system";
import { Properties } from "csstype";

export interface CourseCollectionType {
  courseArea: string;
  courseDescription: string;
  courseDuration: string;
  courseEmecPicture: {
    imageDescription: string;
    imageURL: string;
  };
  courseEmecURL: string;
  courseImage: {
    imageDescription: string;
    imageURL: string;
  };
  courseLevel: string;
  courseName: string;
  uuid: string;
  courseSyllabus: string[];
}
export interface BlogCollectionType {
  slug: string;
  blogActive: boolean;
  blogDescription: string;
  blogPost: string;
  blogTitle: string;
  featuredImage: {
    imageDescription: string;
    imageURL: string;
  };
  uuid: string;
}

export interface TestimonialCollectionType {
  slug: string;
  testimonialLocation: string;
  testimonialName: string;
  testimonialPicture: {
    imageDescription: string;
    imageURL: string;
  };
  testimonialText: string;
  uuid: string;
}

export type Head<T> = T extends (...args: infer T) => any ? T[0] : never;

export type FinalReturnType<T> = {
  0: T;
  1: T extends (...args: any) => infer R ? FinalReturnType<R> : T;
}[T extends (...args: any) => infer _ ? 1 : 0];

export type ResponsiveStyleValue<
  TType,
  TBreakpoint extends Breakpoint = Breakpoint
> = {
  [Key in TBreakpoint]?: TType | null;
};

export type ResponsiveFontSize = ResponsiveStyleValue<Properties["fontSize"]>;

export type ThemeStyles = SxProps<Theme>;
