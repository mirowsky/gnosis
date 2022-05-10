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
import { HeaderItem } from "../Header/Header";
import { handleMenuClick } from "@workspace/utility";
import { NextRouter, useRouter } from "next/router";

export type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const router = useRouter();

  const items = React.useMemo(() => {
    return menu_items(router).map((item, _index) => ({
      ...item,
      onClick: () => {
        item.onClick();
        setMenuOpen(false);
      },
    }));
  }, [router]);

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
            items={items}
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
        items={items}
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

const menu_items = (router: NextRouter): HeaderItem[] => [
  {
    label: "Sobre nós",
    onClick: () => handleMenuClick(router, "#about_us_section"),
  },
  {
    label: "Cursos",
    onClick: () => handleMenuClick(router, "#course_section"),
  },
  {
    label: "Contato",
    onClick: () => {
      handleMenuClick(router, "#contact_section");
    },
  },
];
