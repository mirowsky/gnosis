import { Box, Button, TextField, TextFieldProps } from "@mui/material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { DEFAULT_ContactForm_TESTING_PROPS } from "./ContactForm.fixture";
import NumberFormat, { NumberFormatProps } from "react-number-format";

export type ContactFormProps = {
  NameInputProps?: TextFieldProps;
  PhoneInputProps?: React.Component<NumberFormatProps, TextFieldProps>["props"];
  EmailInputProps?: TextFieldProps;
  MessageIputProps?: TextFieldProps;
  LoadingButtonProps?: LoadingButtonProps;
};

export const ContactForm = ({
  EmailInputProps,
  LoadingButtonProps,
  MessageIputProps,
  NameInputProps,
  PhoneInputProps,
}: ContactFormProps = DEFAULT_ContactForm_TESTING_PROPS) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.grid}>
        <TextField fullWidth {...NameInputProps}></TextField>
        <NumberFormat
          customInput={TextField}
          fullWidth
          format="(##) #-####-####"
          {...(PhoneInputProps as unknown)}
        ></NumberFormat>
        <TextField
          sx={styles.emailInputBox}
          fullWidth
          {...EmailInputProps}
        ></TextField>
        <TextField
          sx={styles.messageInputBox}
          fullWidth
          multiline
          rows={8}
          {...MessageIputProps}
        ></TextField>

        <Box sx={styles.submitButtonBox}>
          <LoadingButton
            sx={styles.submitButton}
            variant="contained"
            color="primary"
            {...LoadingButtonProps}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;

const styles = stylesheet.create({
  root: {
    width: "100%",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: {
      lg: "repeat(2, minmax(0, 1fr))",
      xs: "repeat(1, minmax(0, 1fr))",
    },
    gap: (theme) => ({ xs: theme.spacing(4) }),
  },
  nameInputBox: {},
  phoneInputBox: {},
  emailInputBox: {
    gridColumn: { lg: "1/3" },
  },
  messageInputBox: {
    gridColumn: { lg: "1/3" },
  },
  submitButtonBox: {},
  submitButton: {},
});
