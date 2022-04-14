import React from "react";
import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { GlobalSnack, HideOnScroll } from "@workspace/components/shared";
import { ContactProxy } from "./Contact.proxy";
import { NewsletterProxy } from "./Newsletter.proxy";
import { HeaderProxy } from "./Header.proxy";
import { SupportMenuProxy } from "./SupportMenu.proxy";
import { FooterProxy } from "./Footer.proxy";
import { MobileDrawerProxy } from "./MobileDrawer.proxy";

export type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <Box sx={styles.root}>
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
          <HeaderProxy
            items={[]}
            onBurguerClick={() => setMenuOpen((prevState) => !prevState)}
            open={menuOpen}
          />
        </div>
      </HideOnScroll>

      {children}

      <NewsletterProxy />

      <ContactProxy
        sx={{
          px: (theme) => ({ xs: theme.spacing(4), sm: theme.spacing(10) }),
          pt: (theme) => theme.spacing(10),
          maxWidth: (theme) => theme.breakpoints.values.xl,
          margin: "auto",
        }}
      />

      <FooterProxy />

      {/* ABSOLUTE POSITION COMPONENTS */}

      <MobileDrawerProxy
        items={[]}
        onClose={() => setMenuOpen(false)}
        open={menuOpen}
        onOpen={() => setMenuOpen(true)}
      />

      <SupportMenuProxy
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          pb: 2,
          pr: 2,
          zIndex: 2000,
        }}
      />
      <GlobalSnack />
    </Box>
  );
};

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
