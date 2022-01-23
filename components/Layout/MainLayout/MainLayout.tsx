import { Box } from "@mui/material";
import React from "react";
import stylesheet from "@workspace/stylesheet";
import Header, { HeaderProps } from "../Header/Header";
import Footer, { FooterProps } from "../Footer/Footer";
import MobileMenu, { MobileMenuProps } from "../MobileDrawer/MobileDrawer";

export type MainLayoutProps = {
  children: React.ReactNode;
  HeaderProps: HeaderProps;
  FooterProps: FooterProps;
  MobileMenuProps: MobileMenuProps;
};

const MainLayout = ({
  children,
  FooterProps: footerProps,
  HeaderProps: headerProps,
  MobileMenuProps: mobileMenuProps,
}: MainLayoutProps) => {
  return (
    <Box sx={styles.root}>
      <MobileMenu {...mobileMenuProps} />
      <Header {...headerProps} />
      {children}
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
