import React from "react";
import stylesheet from "theme-stylesheet";

export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return <div></div>;
};

export default Header;

const styles = stylesheet.create({
  root: {
    display: "flex",
  },
});
