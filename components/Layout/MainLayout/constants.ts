import type { MainLayoutProps } from "./MainLayout";
import React from "react";
import { DEFAULT_FOOTER_TEST_PROPS } from "../Footer/constants";
import { DEFAULT_HEADER_TESTING_PROPS } from "../Header/constants";
import { DEFAULT_MOBILE_DRAWER_TEST_PROPS } from "../MobileDrawer/constants";
import { DEFAULT_ContactSection_TESTING_PROPS } from "../Contact/Main/ContactSection.fixture";
import { DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS } from "../Newsletter/Main/constants";

export const MAIN_LAYOUT_TEST_ID = {} as const;
export const MAIN_LAYOUT_DEFAULT_PROPS: MainLayoutProps = {
  children: React.createElement("div", {}, "hello world"),
  FooterProps: DEFAULT_FOOTER_TEST_PROPS,
  HeaderProps: DEFAULT_HEADER_TESTING_PROPS,
  MobileMenuProps: DEFAULT_MOBILE_DRAWER_TEST_PROPS,
  ContactSectionProps: DEFAULT_ContactSection_TESTING_PROPS,
  NewsLetterSectionProps: DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS,
};
