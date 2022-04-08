import React from "react";

export type SupportMenuItemProps = {
  icon: React.FunctionComponent;
  title: string;
  subtitle: string;
  online?: boolean;
  onClick?: (...args: unknown[]) => void;
};

export const SupportMenuItem = (props: SupportMenuItemProps) => {
  return <div>Hello, SupportMenuItem!</div>;
};

export default SupportMenuItem;
