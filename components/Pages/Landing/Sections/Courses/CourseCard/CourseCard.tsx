import React from "react";

type CardButton = {
  children: React.ReactNode | string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type CardTag<TType extends {} = {}> = {
  label: string;
  icon: React.ComponentType<TType>;
};

export type CourseCardProps = {
  primaryAction: CardButton;
  secondaryAction: CardButton;
  title: string;
  tags: CardTag[];
  img: {
    src: string;
    alt: string;
  };
};

const CourseCard = (props: CourseCardProps) => {
  return <div></div>;
};

export default CourseCard;
