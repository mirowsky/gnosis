import stylesheet from "@workspace/stylesheet";
import React from "react";
import { CourseCardProps } from "../CourseCard/CourseCard";

export type CourseSliderProps = {
  items: CourseCardProps[];
};

const CourseSlider = ({ items = [] }: CourseSliderProps) => {
  return <div></div>;
};

export default CourseSlider;

const styles = stylesheet.create({});
