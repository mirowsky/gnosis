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
import ContactDial, { ContactDialProps } from "../ContactDial/Main/ContactDial";
import { HideOnScroll } from "@workspace/components/utility";

export type MainLayoutProps = {
  children: React.ReactNode;
  HeaderProps: HeaderProps;
  FooterProps: FooterProps;
  MobileMenuProps: MobileMenuProps;
  ContactSectionProps: ContactSectionProps;
  NewsLetterSectionProps: NewsLetterSectionProps;
  ContactDialProps: ContactDialProps;
};

const MainLayout = ({
  children,
  FooterProps: footerProps,
  HeaderProps: headerProps,
  MobileMenuProps: mobileMenuProps,
  ContactSectionProps,
  NewsLetterSectionProps,
  ContactDialProps,
}: MainLayoutProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.contactDialBox}>
        <ContactDial {...ContactDialProps} />
      </Box>
      <MobileMenu {...mobileMenuProps} />

      <HideOnScroll>
        <div
          style={{
            position: "sticky",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 10,
          }}
        >
          <Header {...headerProps} />
        </div>
      </HideOnScroll>

      {children}

      <NewsLetterSection {...NewsLetterSectionProps} />

      <ContactSection
        {...ContactSectionProps}
        sx={{
          px: (theme) => ({ xs: theme.spacing(4), sm: theme.spacing(10) }),
          pt: (theme) => theme.spacing(10),
          maxWidth: (theme) => theme.breakpoints.values.xl,
          margin: "auto",
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

  contactDialBox: {
    position: "fixed",
    bottom: 0,
    right: 0,
    p: 4,
  },
});
