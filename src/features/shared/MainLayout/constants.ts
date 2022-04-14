import type { MainLayoutProps } from "./MainLayout";
import React from "react";
import { DEFAULT_Footer_TESTING_PROPS } from "../../layout/screens/Footer/Footer.fixture";
import { DEFAULT_HEADER_TESTING_PROPS } from "../../layout/components/Header/constants";
import { DEFAULT_MOBILE_DRAWER_TEST_PROPS } from "../../layout/components/MobileDrawer/constants";
import { DEFAULT_ContactSection_TESTING_PROPS } from "../../layout/screens/Contact/Main/ContactSection.fixture";
import { DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS } from "../../layout/screens/Newsletter/constants";
import { DEFAULT_ContactDial_TESTING_PROPS } from "../ContactDial/Main/ContactDial.fixture";
import { DEFAULT_ContactFormDialog_TESTING_PROPS } from "@workspace/components/shared";
import { DEFAULT_SupportMenuMain_TESTING_PROPS } from "../../layout/screens/SupportMenu/Main/SupportMenuMain.fixture";

export const MAIN_LAYOUT_TEST_ID = {} as const;
export const MAIN_LAYOUT_DEFAULT_PROPS: MainLayoutProps = {
  children: React.createElement("div", {}, "hello world"),
  FooterProps: DEFAULT_Footer_TESTING_PROPS,
  HeaderProps: DEFAULT_HEADER_TESTING_PROPS,
  MobileMenuProps: DEFAULT_MOBILE_DRAWER_TEST_PROPS,
  ContactSectionProps: DEFAULT_ContactSection_TESTING_PROPS,
  NewsLetterSectionProps: DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS,
  SupportMenuMainProps: DEFAULT_SupportMenuMain_TESTING_PROPS,
  ContactFormDialogProps: {
    ...DEFAULT_ContactFormDialog_TESTING_PROPS,
  },
};
