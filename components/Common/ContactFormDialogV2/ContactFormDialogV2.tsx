import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import {
  Box,
  Button,
  ButtonProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Backdrop, BackdropProps } from "@workspace/components/utility";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import NumberFormat, { NumberFormatProps } from "react-number-format";

export type ContactFormDialogV2Props = {
  BackdropProps?: BackdropProps;
  NameInputProps?: TextFieldProps;
  EmailInputProps?: TextFieldProps;
  PhoneInputProps?: NumberFormatProps & TextFieldProps;
  MessageInputProps?: TextFieldProps;
  PrimaryActionProps?: LoadingButtonProps;
  SecondaryActionProps?: ButtonProps;
  sx?: ThemeStyles;
};

export const ContactFormDialogV2 = ({
  BackdropProps,
  EmailInputProps,
  MessageInputProps,
  NameInputProps,
  PhoneInputProps,
  PrimaryActionProps,
  SecondaryActionProps,
  sx,
}: ContactFormDialogV2Props) => {
  return (
    <Backdrop {...BackdropProps}>
      <Box sx={{ ...styles.root, ...sx }}>
        <TextField {...NameInputProps} fullWidth sx={styles.nameInputBox} />
        <NumberFormat
          customInput={TextField}
          fullWidth
          format="(##) #-####-####"
          {...(PhoneInputProps as unknown)}
          sx={styles.phoneInputBox}
        />
        <TextField {...EmailInputProps} fullWidth sx={styles.emailInputBox} />
        <TextField
          {...MessageInputProps}
          fullWidth
          multiline
          rows={6}
          sx={styles.messageInputBox}
        />

        <Box sx={styles.actions}>
          <LoadingButton
            variant="outlined"
            color="primary"
            {...PrimaryActionProps}
          />
          <Button variant="text" color="primary" {...SecondaryActionProps} />
        </Box>
      </Box>
    </Backdrop>
  );
};

export default ContactFormDialogV2;

const scale = {
  "& *": {
    fontSize: { xs: "0.75rem !important" },
  },
} as ThemeStyles;

const styles = stylesheet.create({
  actions: { display: "flex", gridColumn: "2/3", gap: "1rem" },

  primaryAction: {},
  secondaryAction: {},

  root: {
    maxWidth: "90vw",
    minWidth: "75vw",
    height: "auto",
    borderRadius: (theme) => theme.shape.borderRadius,
    backgroundColor: (theme) => theme.palette.background.paper,
    boxShadow: (theme) => theme.shadows[3],
    display: "grid",
    gridTemplateColumns: {
      lg: "repeat(2, minmax(0, 1fr))",
      xs: "repeat(1, minmax(0, 1fr))",
    },
    gap: (theme) => ({ xs: theme.spacing(3) }),
  },

  nameInputBox: {
    ...scale,
  },
  phoneInputBox: {
    ...scale,
  },
  emailInputBox: {
    ...scale,
    gridColumn: { lg: "1/3" },
  },
  messageInputBox: {
    ...scale,
    gridColumn: { lg: "1/3" },
  },
});
