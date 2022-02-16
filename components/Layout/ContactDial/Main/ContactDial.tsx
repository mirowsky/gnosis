import { Box } from "@mui/material";
import { MotionBox } from "@workspace/components/utility";
import stylesheet from "@workspace/stylesheet";
import { Variants } from "framer-motion";
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
      <MotionBox sx={styles.itemsBox}>
        {items.map((item, index) => {
          return (
            <MotionBox
              variants={VARIANTS}
              transition={{
                transitionDelay: `${0.1 * index}`,
              }}
              key={index}
              initial="closed"
              animate={ContactDialButtonProps.open ? "open" : "closed"}
              component={ContactDialItem}
              {...item}
            ></MotionBox>
          );
        })}
      </MotionBox>
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

const VARIANTS: Variants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: 350,
  },
};

const styles = stylesheet.create({
  root: {
    position: "relative",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: (theme) => theme.spacing(2.5),
    border: "none",
    outline: "none",
    background: "transparent",
  },

  buttonBox: {},
  itemsBox: {
    display: "flex",
    flexDirection: "column",
    gap: (theme) => theme.spacing(2),
  },
});
