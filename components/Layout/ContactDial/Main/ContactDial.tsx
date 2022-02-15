import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import ContactDialButton, {
  ContactDialButtonProps,
} from "../ContactDialButton/ContactDialButton";
import ContactDialItem, {
  ContactDialItemProps,
} from "../ContactDialItem/ContactDialItem";

export type ContactDialProps = {
  items: ContactDialItemProps[];
  ContactDialButtonProps: ContactDialButtonProps;
};

export const ContactDial = ({
  ContactDialButtonProps,
  items,
}: ContactDialProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.itemsBox}>
        {items.map((item, index) => {
          return <ContactDialItem {...item} key={index} />;
        })}
      </Box>
      <Box sx={styles.buttonBox}>
        <ContactDialButton
          {...ContactDialButtonProps}
          fontSize={{ xs: "1rem" }}
        />
      </Box>
    </Box>
  );
};

export default ContactDial;

const styles = stylesheet.create({
  root: {
    position: "relative",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: (theme) => theme.spacing(2),
  },

  buttonBox: {},
  itemsBox: {
    display: "flex",
    flexDirection: "column",
    gap: (theme) => theme.spacing(2),
  },
});
