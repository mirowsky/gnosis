import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export interface FooterProps {
  copyright: string;
  contacts: string[];
  emailContacts: string[];
  socials: Array<{
    icon: React.FunctionComponent;
    onClick: (...args: unknown[]) => void;
  }>;
}

const Footer = (props: FooterProps) => {
  return <Box sx={styles.root}></Box>;
};

export default Footer;

const styles = stylesheet.create({
  root: {},
});
