import { Box } from "@mui/material";
import React from "react";
import stylesheet from "@workspace/stylesheet";
import Header, { HeaderProps } from "../Header/Header";
import Footer, { FooterProps } from "../Footer/Footer";

export type MainLayoutProps = {
  children: React.ReactNode;
  headerProps: HeaderProps;
  footerProps: FooterProps;
};

const MainLayout = ({
  children,
  footerProps,
  headerProps,
}: MainLayoutProps) => {
  return (
    <Box sx={styles.root}>
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
