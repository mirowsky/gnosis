import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type ContactFormDialogProps = {};

export const ContactFormDialog = (props: ContactFormDialogProps) => {
  return <Box sx={styles.root}></Box>;
};

export default ContactFormDialog;

const styles = stylesheet.create({
  root: {},
});
