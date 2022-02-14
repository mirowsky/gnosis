import { Box } from "@mui/material";
import React from "react";
import stylesheet from "@workspace/stylesheet";
import Header, { HeaderProps } from "../Header/Header";
import Footer, { FooterProps } from "../Footer/Footer";
import MobileMenu, { MobileMenuProps } from "../MobileDrawer/MobileDrawer";
import ContactSection, {
  ContactSectionProps,
} from "../Contact/Main/ContactSection";
import NewsLetterSection, {
  NewsLetterSectionProps,
} from "components/Layout/Newsletter/Main/NewsLetterSection";
import { ResponsiveStyleValue } from "@workspace/types";
import { Properties } from "csstype";

export type MainLayoutProps = {
  children: React.ReactNode;
  HeaderProps: HeaderProps;
  FooterProps: FooterProps;
  MobileMenuProps: MobileMenuProps;
  ContactSectionProps: ContactSectionProps;
  NewsLetterSectionProps: NewsLetterSectionProps;
};

const MainLayout = ({
  children,
  FooterProps: footerProps,
  HeaderProps: headerProps,
  MobileMenuProps: mobileMenuProps,
  ContactSectionProps,
  NewsLetterSectionProps,
}: MainLayoutProps) => {
  return (
    <Box sx={styles.root}>
      <MobileMenu {...mobileMenuProps} />
      <Header {...headerProps} />
      {children}

      <NewsLetterSection {...NewsLetterSectionProps} />

      <ContactSection
        {...ContactSectionProps}
        sx={{
          px: (theme) => theme.spacing(6),
          pt: (theme) => theme.spacing(6),
        }}
      />
      <Footer {...footerProps} />
    </Box>
  );
};

export default MainLayout;

const styles = stylesheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});
