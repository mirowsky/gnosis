import { Box } from "@mui/material";
import React from "react";
import stylesheet from "@workspace/stylesheet";
import Header, { HeaderProps } from "../../layout/screens/Header/Header";
import Footer, { FooterProps } from "../../layout/screens/Footer/Footer";
import MobileMenu, {
  MobileMenuProps,
} from "../../layout/screens/MobileDrawer/MobileDrawer";
import ContactSection, {
  ContactSectionProps,
} from "../../layout/screens/Contact/Main/ContactSection";

import { GlobalSnack, HideOnScroll } from "@workspace/components/shared";
import {
  ContactFormDialogV2,
  ContactFormDialogV2Props,
} from "@workspace/components/shared";
import SupportMenuMain, {
  SupportMenuMainProps,
} from "../../layout/screens/SupportMenu/Main/SupportMenuMain";
import NewsLetterSection, {
  NewsLetterSectionProps,
} from "../../layout/screens/Newsletter/Main/NewsLetterSection";
export type MainLayoutProps = {
  children: React.ReactNode;
  HeaderProps: HeaderProps;
  FooterProps: FooterProps;
  MobileMenuProps: MobileMenuProps;
  ContactSectionProps: ContactSectionProps;
  NewsLetterSectionProps: NewsLetterSectionProps;
  SupportMenuMainProps: SupportMenuMainProps;
  ContactFormDialogProps: ContactFormDialogV2Props;
};

export const MainLayout = ({
  children,
  FooterProps: footerProps,
  HeaderProps: headerProps,
  MobileMenuProps: mobileMenuProps,
  ContactSectionProps,
  NewsLetterSectionProps,
  ContactFormDialogProps,
  SupportMenuMainProps,
}: MainLayoutProps) => {
  return (
    <Box sx={styles.root}>
      <SupportMenuMain
        {...SupportMenuMainProps}
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          pb: 2,
          pr: 2,
          zIndex: 2000,
        }}
      />
      <MobileMenu {...mobileMenuProps} />

      <ContactFormDialogV2 {...ContactFormDialogProps} />

      <HideOnScroll>
        <div
          style={{
            position: "sticky",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1200,
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
      <GlobalSnack />
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
    p: 2.5,
    zIndex: 10,
  },
});
