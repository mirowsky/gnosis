import { CourseCollectionType } from "@workspace/types";
import React from "react";
import { AboutProxy } from "./About.proxy";
import { CoursesProxy } from "./Courses.proxy";
import { DefenseProxy } from "./Defense.proxy";
import { HeroProxy } from "./Hero.proxy";
export type HomePageProps = {
  courses: CourseCollectionType[];
};

export const Home = ({ courses = [] }: HomePageProps) => {
  return (
    <React.Fragment>
      <HeroProxy />
      <DefenseProxy />
      <AboutProxy />
      <CoursesProxy items={courses} />
    </React.Fragment>
  );
};
