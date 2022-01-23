import type { MainLayoutProps } from "./MainLayout";
import React from "react";
import { DEFAULT_FOOTER_TEST_PROPS } from "../Footer/constants";
import { DEFAULT_HEADER_TESTING_PROPS } from "../Header/constants";

export const MAIN_LAYOUT_TEST_ID = {} as const;
export const MAIN_LAYOUT_DEFAULT_PROPS: MainLayoutProps = {
  children: React.createElement("div", {}, "hello world"),
  footerProps: DEFAULT_FOOTER_TEST_PROPS,
  headerProps: DEFAULT_HEADER_TESTING_PROPS,
};
