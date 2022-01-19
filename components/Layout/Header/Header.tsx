import React from "react";
import stylesheet from "theme-stylesheet";

type HeaderItem = {
  label: string;
  onClick: (...args: unknown[]) => void;
};

export interface HeaderProps {
  logo: {
    src: string;
    alt?: string;
    label?: string;
  };
  items: HeaderItem[];
  cta: HeaderItem;
}

export const Header = (props: HeaderProps) => {
  return <div>hello header again</div>;
};

export default Header;

const styles = stylesheet.create({
  root: {
    display: "flex",
  },
});
